import { shallowMount } from '@vue/test-utils'
import Pages from '@/views/Pages.vue'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(Pages, {
    propsData: {},
    mocks: {},
    stubs: {},
    methods: {}
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe(`Pages`, () => {
  test(`regression test`, () => {
    expect(wrapper.element)
      .toMatchSnapshot()
  })  

})