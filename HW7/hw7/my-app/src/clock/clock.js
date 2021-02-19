import React, { Fragment, useRef } from 'react';
import styled from 'styled-components';
import Pin from './pin';
import Mark from './mark';
import Second from './second';
import Hour from './hour';
import Minute from './minute';

const G = styled.g``;

const Svg = styled.svg``;

const marks = () => {
    let mrks = [];
    for (let i = 1; i < 13; i++) {
        const stroke_width = (i % 3 === 0) ? "0.5" : "0.2";
        mrks = [...mrks, <Mark key={i} x1="15" y1="0" x2="16" y2="0" stroke_width={stroke_width} hour_pos={i} />]
    }
    return <G> {mrks} </G>;
}



function Clock(props) {
    let { h, m, s, start_h, start_m, start_s, width, height } = props;
    const dt = new Date(Date.now());
    const hrRef = useRef(null);
    const minRef = useRef(null);
    const secRef = useRef(null);
    console.log('dt: ', dt);
    h = h || dt.getHours() % 12;
    m = m || dt.getMinutes();
    s = s || dt.getSeconds();
    start_h = start_h || h;
    start_m = start_m || m;
    start_s = start_s || s;


    const hr = <Hour ref={hrRef} hours={h} startHours={start_h} startMinutes={start_m} startSeconds={start_s} x1="0" y1="0" x2="9" y2="0" />;
    const mn = <Minute ref={minRef} minutes={m} startMinutes={start_m} startSeconds={start_s} x1="0" y1="0" x2="13" y2="0" />;
    const sec = <Second ref={secRef} seconds={s} startSeconds={start_s} x1="0" y1="0" x2="16" y2="0" />;
    const pin = <Pin cx="20" cy="20" r="0.7" />;
    const mrks = marks();

    return (<Svg viewBox="0 0 40 40" width={width} height={height}>
        <Fragment>
            {mrks}
            {hr}
            {mn}
            {sec}
            {pin}
        </Fragment>
    </Svg>);
}

export default Clock;