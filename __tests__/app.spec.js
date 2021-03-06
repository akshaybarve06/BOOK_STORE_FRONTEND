import { shallowMount } from '@vue/test-utils';
import App from '../src/App.vue'

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(App, {
        propsData: {},
        mocks: {},
        stubs: {},
        methods: {},
    });
});

afterEach(() => {
    wrapper.destroy();
});

describe('App', () => {
    test('is a Vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });
});
