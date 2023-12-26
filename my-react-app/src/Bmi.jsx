import React from 'react'
import { useState } from 'react'
import './bmi.css'

export default function Testing() {
    const [input, setinput] = useState({
        firstInput: '',
        secondInput: ''
    })
    const [handleBtn, sethandleBtn] = useState('')
    const [handleBtnSecond, sethandleBtnSecond] = useState('')
    const [handleBtnFinal, sethandleBtnFinal] = useState('')
    

    function handleInput(event) {
        const { name, value } = event.target;
        setinput(prev => {
            if (name === 'first') {
                return{
                firstInput: value,
                secondInput: prev.secondInput}
            } else if (name === 'second') {
               return {firstInput: prev.firstInput,
                secondInput: value}
            } 
        })
        
    }
    function btnToggle() {
        let resultWeight = parseFloat(input.firstInput);
        let resultHeight = parseFloat(input.secondInput);
        sethandleBtn(resultWeight);
        sethandleBtnSecond(resultHeight)
        if (!isNaN(resultWeight) && !isNaN(resultHeight) && resultHeight > 0 && resultWeight > 0) {
            sethandleBtnFinal(((resultWeight * resultWeight) / resultHeight).toFixed(1))
        } else {
            sethandleBtnFinal("invalid text");
        };
       
        
    };

  return (
    <div className='bmi-container'>
          <div>
              <div className='header'>
              <img src='./logo.svg' alt='logo' />
              <h1>niyi's body mass index calculator</h1>
              <p>Better understand your weight in relation to your height using our Body Mass Index (BMI) calculator.
                  While BMI is not the sole determinant of an healthy weight,
                  it offers a valuable starting point to evaluate your overall health and wellbeing. </p>
              </div>
              <div className='input-reults_texts-container'>
              
                  <span className='enter-dets'>Enter details below</span>
                  <h1>your weight is: {input.firstInput}  and your height is: {input.secondInput} </h1>
              <div className='input-container'>
                  <div className='sub-input-con'>
                  <span>weight</span>
                      <input value={input.firstInput} className='inputs' name='first' placeholder='enter weight(Kg)' onChange={handleInput} />
                  </div>
                  
                  <div className='sub-input-con'>
                  <span>height</span>
                      <input value={input.secondInput} className='inputs' name='second' placeholder='enter height(cm)' onChange={handleInput} />
                      </div>
              </div>
                  <button onClick={btnToggle} className='result-btn'>Enter Results</button>
                  
                  <div className='results-container'>
                  <h2>{handleBtnFinal}</h2>
                      <span>Diagnosis : {
                          (handleBtnFinal >= 5 && handleBtnFinal < 18)
        ? 'You are underweight'
        : (handleBtnFinal >= 18 && handleBtnFinal <= 25)
        ? 'You have a healthy BMI'
        : (handleBtnFinal > 25 && handleBtnFinal <= 29)
        ? 'You are overweight'
        : (handleBtnFinal > 29 && handleBtnFinal <= 40)
        ? 'You are obese'
        : (handleBtnFinal > 40 && handleBtnFinal <= 63)
        ? 'You are extremely obese, think about your life!'
        : handleBtnFinal === ''
        ? 'Input your Correct Details'
        : 'Invalid BMI'}</span>
                  </div>
                  </div>
          </div>
          
    </div>
  )
}
// 17 & below-underweight
// 18 - 25 - healthy
// 26 - 29 - overweight
// 30 - 40 - obese
// 40 - 63 - extremely obese
