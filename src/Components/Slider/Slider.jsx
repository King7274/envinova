import React from "react";
import { Component } from "react";
import styles from './Slider.css';

import {Transition, animated } from '@react-spring/web';
import img1 from '../../Photo/img1.jpg';
import img2 from '../../Photo/img2.jpg';
import img3 from '../../Photo/img3.jpg';
import img4 from '../../Photo/img4.jpg';

class Slider extends Component {

    state = {
        list: [
            img1,
            img2,
            img3,
            img4
        ],current: 0,
        next: true
    };

    // AutoSlide
    autoSlide = () => {
      if(this.autoSlide || this.resume){
        return;
      }
      
        this.autoStart = setInterval( () => {
            const {current,list} = this.state;
            this.setState({
                current: current+1 >= list.length ? 0 : current + 1,
                next: true
            });
        }, 3500);
    };

    componentDidMount() {

    }

    //Clear autoslide and resumr
    clear = () => {
        clearInterval(this.autoStart);
        clearTimeout(this.resume);
        this.autoStart = undefined;
        this.resume = undefined;
    };

    //Next slide
    next = () => {
         
        this.clear();

        //Update the current index of slide
        const { current, list } = this.state;
        this.setState({
          current: current + 1 >= list.length ? 0 : current + 1,
          next: true
        });
         
    }

    //prev slide
    prev = () =>{
       
        //Stop and Clear the auto slides
    this.clear();

    //Update the current index of slide
    const { current, list } = this.state;
    this.setState({
      current: current - 1 < 0 ? list.length - 1 : current - 1,
      next: false
    });
    }

    //If autoSlide is stopped
    //And in Idle
    componentDidUpdate = () =>{
        if (!this.resume && !this.autoStart) {
            this.resume = setTimeout(() => {
              this.autoSlide();
            }, 1500);
          }
    }
    //clear in mount;
    componentWillUnmount = () => {
        this.clear();
    }

    render() {
        const  {current, list,next } = this.state;

        //General slides
        const slides = list.map(e => style => (
            <animated.div
              className={styles.slide}
              style={{
                ...style,
                backgroundImage: `url(${e})`
              }}
            ></animated.div>
          ));

          const animationDirection = next
          ? {
            from: { opacity: 0, transform: "translate3d(100%,0,0)" },
          enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
          leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
          }
           : {
            from: { opacity: 0, transform: "translate3d(-50%,0,0)" },
            enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
            leave: { opacity: 0, transform: "translate3d(100%,0,0)" }
          };

          //Wrap inside the transition group
          const item = (
            <Transition
              native
              reset
              unique
              items={current}
              from={animationDirection.from}
              enter={animationDirection.enter}
              leave={animationDirection.leave}
            >
              {index => slides[index]}
            </Transition>
          );

    

    return(
        <>
        {/* Slides */}
        <div className={styles.wrapper}>{item}</div>

        {/* Controls */}
        <div className={styles.controls}>
          <span onClick={this.prev}>Prev</span>
          <span onClick={this.next}>Next</span>
        </div>

        </>
    );
        

}






}

export default Slider;
