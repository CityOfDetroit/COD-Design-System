#!/bin/bash

DEFAULT_PROJECT_ROOT=./
PROJECT_ROOT=${1:-$DEFAULT_PROJECT_ROOT}

if [[ ! -d $PROJECT_ROOT ]]; then
    echo "${PROJECT_ROOT} is not a directory..."
    exit 1
fi

compile_bootstrap () {
    echo "Compiling bootstrap SASS..."
    yarn sass -I ${PROJECT_ROOT}/node_modules/ "${PROJECT_ROOT}src/scss/themed-bootstrap.scss" "${PROJECT_ROOT}src/shared/themed-bootstrap.css"
    if [ $? -ne 0 ];
    then
        echo "Failed to compile bootstrap... Aborting."
        exit 1
    fi

    # Apply replace_rem_w_em and format_bootstrap functions to the generated bootstrap CSS file
    replace_rem_w_em "${PROJECT_ROOT}src/shared/themed-bootstrap.css"
    format_bootstrap "${PROJECT_ROOT}src/shared/themed-bootstrap.css"
}
compile_components() {
    # Variable Setup
    found_scss_files=()
    
    # Handle experimental components with atomic structure
    exp_base_path="${PROJECT_ROOT}src/experimental/components"
    exp_folders=("atoms" "molecules" "organisms")
    
    # Find SCSS files in experimental atomic folders
    for folder in "${exp_folders[@]}"; do
        current_path="${exp_base_path}/${folder}"
        if [[ -d $current_path ]]; then
            while read -r scss_file; do
                found_scss_files+=("$scss_file")
            done < <(find "$current_path" -type f -name "*.scss" 2>/dev/null)
        fi
    done
    
    # Find SCSS files in stable components
    stable_base_path="${PROJECT_ROOT}src/stable/components"
    if [[ -d $stable_base_path ]]; then
        # Look for .scss files recursively in all component folders
        while read -r scss_file; do
            found_scss_files+=("$scss_file")
        done < <(find "$stable_base_path" -type f -name "*.scss" -not -path "*/node_modules/*" 2>/dev/null)
    fi

    # Debug output
    echo "Searching in experimental path: $exp_base_path"
    echo "Searching in stable path: $stable_base_path"
    
    # Print current working directory for debugging
    echo "Current working directory: $(pwd)"

    # Check if any SCSS files were found
    if [[ ${#found_scss_files[@]} -eq 0 ]]; then
        echo "No .scss files found in any of the directories. Aborting."
        ls -la "${stable_base_path}/GovBanner"  # Debug line to show contents of GovBanner directory
        exit 1
    fi

    # Rest of the function remains the same...
    echo "Found .scss files:"
    for scss_file in "${found_scss_files[@]}"; do
        echo "$scss_file"
    done

    read -p "Confirm the conversion of found .scss files (input 'yes' to proceed or 'abort' to stop the script): " user_input

    case $user_input in
        "yes")
            echo "Starting CSS generation..."
            ;;
        "abort")
            echo "Aborting the script."
            exit 0
            ;;
        *)
            echo "Invalid input. Aborting."
            exit 1
            ;;
    esac
    
    # Convert .scss files to .css
    for scss_file in "${found_scss_files[@]}"; do
        component_scss_path=$(realpath "$scss_file")
        output_css_file="${component_scss_path%.*}.css"
        
        yarn sass -I ${PROJECT_ROOT}/node_modules/ "$component_scss_path" "$output_css_file"
        
        replace_rem_w_em "$output_css_file"
        format_bootstrap "$output_css_file"
    done

    echo "CSS generation and post-processing completed."
}



replace_rem_w_em () {
    echo "Replacing REMs with EMs..."
    sed -i.bak -E "s|([0-9])rem|\1em|g" "$1" && rm "$1.bak"
    if [ $? -ne 0 ]; then
        echo "Failed to replace REMs with EMs in $1... Aborting."
        exit 1
    fi
}

format_bootstrap () {
    echo "Formatting output..."
    yarn prettier -w "$1"
    if [ $? -ne 0 ]; then
        echo "Formatting output failed for $1... Aborting."
        exit 1
    fi
}

# Call the functions
compile_components
compile_bootstrap
exit $?