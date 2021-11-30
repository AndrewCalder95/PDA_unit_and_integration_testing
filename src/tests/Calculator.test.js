import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator />)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add 1 to 4 to get 5', () => {
    const add_button = container.find('#operator_add');
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const equals_button = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    add_button.simulate('click');
    button4.simulate('click');
    equals_button.simulate('click')
    expect(runningTotal.text()).toEqual('5');
  })

  it('should subtract 4 from 7 and get 3', () => {
    const subtract_button = container.find('#operator-subtract');
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const equals_button = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    subtract_button.simulate('click');
    button4.simulate('click');
    equals_button.simulate('click')
    expect(runningTotal.text()).toEqual('3');
  })

  it('should multiply 3 by 5 and get 15', () => {
    const multiply_button = container.find('#operator-multiply');
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const equals_button = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    multiply_button.simulate('click');
    button5.simulate('click');
    equals_button.simulate('click')
    expect(runningTotal.text()).toEqual('15');
  })

  it('should divide 21 by 7 and get 3', () => {
    const multiply_button = container.find('#operator-multiply')
    const divide_button = container.find('#operator-divide');
    const button3 = container.find('#number3');
    const button7 = container.find('#number7');
    const equals_button = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    multiply_button.simulate('click');
    button3.simulate('click');
    equals_button.simulate('click')
    divide_button.simulate('click');
    button7.simulate('click');
    equals_button.simulate('click')
    expect(runningTotal.text()).toEqual('3');
  })

  it('should concatenate multiple number button clicks' , () => {
    const button3 = container.find('#number3');
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    button3.simulate('click');
    button3.simulate('click');
    button3.simulate('click');
    expect(runningTotal.text()).toEqual('3333');
  })

  it('should chain multiple operations together' , () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const multiply_button = container.find('#operator-multiply')
    const divide_button = container.find('#operator-divide');
    const runningTotal = container.find('#running-total');
    const equals_button = container.find('#operator-equals')
    button3.simulate('click');
    multiply_button.simulate('click');
    button5.simulate('click');
    multiply_button.simulate('click');
    button5.simulate('click');
    divide_button.simulate('click');
    button3.simulate('click');
    equals_button.simulate('click')
    expect(runningTotal.text()).toEqual('25');
  })

  it('should clear the running total without affecting the calculation', () => {
    const button3 = container.find('#number3');
    const multiply_button = container.find('#operator-multiply')
    const runningTotal = container.find('#running-total');
    const subtract_button = container.find('#operator-subtract');
    const equals_button = container.find('#operator-equals')
    const clear = container.find('#clear')
    button3.simulate('click');
    multiply_button.simulate('click');
    button3.simulate('click');
    equals_button.simulate('click')
    subtract_button.simulate('click');
    button3.simulate('click');
    clear.simulate('click')
    equals_button.simulate('click')
    expect(runningTotal.text()).toEqual('9');
  })

})

