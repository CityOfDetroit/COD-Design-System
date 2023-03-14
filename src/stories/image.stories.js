import './image';

export default {
    title: 'COD/Atoms/Image',
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
    image.setAttribute('data-background-color', args.backgroundColor);
    image.setAttribute('data-size', args.size);
    image.setAttribute('data-align', args.align);
    image.setAttribute('data-alt', args.imgAlt);
    image.setAttribute('data-sources', args.sources);
    image.setAttribute('data-source', args.source);
    image.setAttribute('data-style', (args.style) ? args.style : '');
    return image;
}

export const ImageSources = Template.bind({});
ImageSources.args = {
    backgroundColor: 'primary',
    size: 'fluid',
    sources: JSON.stringify([
        {
            srcset: 'https://detroitmi.gov/sites/detroitmi.localhost/files/2022-07/Detroit-Housing-Plans_1920.jpg',
            type: 'image/jpg',
            media: '(min-width: 1200px)'
        },
        {
            srcset: 'https://detroitmi.gov/sites/detroitmi.localhost/files/2023-02/HardHat_515x380_0.jpg',
            type: 'image/jpg',
            media: '(min-width: 600px)'
        }
    ]),
    source: 'https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/SOTC_WebGraphic.jpg',
    imgAlt: 'Worker',
    style: 'rounded'
};

export const ImageOnly = Template.bind({});
ImageOnly.args = {
    backgroundColor: 'primary',
    size: 'thumbnail',
    sources: JSON.stringify([]),
    imgAlt: 'SOTC',
    source: 'https://detroitmi.gov/sites/detroitmi.localhost/files/2023-03/SOTC_WebGraphic.jpg',
};