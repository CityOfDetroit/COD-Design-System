import { html } from 'lit-html';
import '../components/News/cod-news';
import { Title } from '@storybook/blocks';

export default {
    tags: ['stable'],
    title: 'Components/News'
};

export const News = {
    tags: ['autodocs'],
    render: () => html `<cod-news></cod-news>`,
};