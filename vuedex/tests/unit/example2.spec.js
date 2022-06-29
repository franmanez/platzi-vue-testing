import { mount } from  '@vue/test-utils'
import App from  '@/App.vue'
import {huevo, espinaca} from  "./jestTest"

const  wrapper = mount(App)

const vm = wrapper.vm

console.log(vm.$data)

wrapper.find('button').trigger('click')

describe('Probar que se cambió la propiedad changeTest ', () => {

    test('should click a button', () => {

        const lastValue = wrapper.vm.changeTest

        wrapper.find('button').trigger('click')

        expect(wrapper.vm.changeTest).toBe(lastValue+1)

    })

})


/*import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})*/
