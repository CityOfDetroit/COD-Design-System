import '../components/atoms/Image/cod-image';

export default {
    title: 'Components/Atoms/Image',
    argTypes: {
        align: {
            control: { type: 'select' },
            options: ['start', 'end']
        },
        backgroundColor: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'],
        },
        size: {
            control: { type: 'select' },
            options: ['fluid', 'thumbnail']
        },
    }
};
// Template
const Template = (args) => {
    const image = document.createElement('cod-image');
    image.innerHTML = args.sources;
    return image;
}

export const ImageSources = Template.bind({});
ImageSources.args = {
    sources : `
    <source srcset="https://detroitmi.gov/sites/detroitmi.localhost/files/2022-07/Detroit-Housing-Plans_1920.jpg" type="image/jpg" media="(min-width: 1200px)">
    <source srcset="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-02/HardHat_515x380_0.jpg" type="image/jpg" media="(min-width: 600px)">
    <img class="img-fluid rounded float-undefined bg-secondary" alt="Worker" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/SOTC_WebGraphic.jpg" loading="lazy">
    `,
};

export const ImageOnly = Template.bind({});
ImageOnly.args = {
    sources : `
    <img class="img-thumbnail  float-undefined bg-primary" alt="SOTC" src="https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/SOTC_WebGraphic.jpg" loading="lazy"></img>
    `,
};