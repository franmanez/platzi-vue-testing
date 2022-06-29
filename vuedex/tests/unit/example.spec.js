import { mount } from  '@vue/test-utils'
import App from  '@/App.vue'
import {huevo, espinaca} from  "./jestTest"

const  wrapper = mount(App)

const vm = wrapper.vm

console.log(vm.$data)

//Descripción: función que va a contener nuestras pruebas.
describe('Se probará la calidad de los productos', ()=>{

    //Escriba sus pruebas aquí
    //Descripción: función que va a contener nuestras validaciones para que pase la prueba.
    test('Calidad del huevo', ()  => {
        //escriba aquí sus validaciones
        expect(huevo().estado[0]).toBe('fresco')
    });

    test('Calidad de la espinaca', ()  => {
        //escriba aquí sus validaciones
        expect(espinaca()).toEqual({
            estado: 1,
            color: "verde"
        })
    });


});



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
