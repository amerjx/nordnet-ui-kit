import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Gold({
  stroke,
  fill,
  strokeWidth,
  style: styleProp,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };

  return (
    <svg style={style} {...rest}>
      <g transform="translate(0.000000, -2.000000)" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <path d="M5.86965367,8.16600891 C5.84103371,8.06736922 5.74962514,7.99955911 5.64587525,8.00000216 L1.35412475,8.00000216 C1.25037486,7.99955911 1.15896629,8.06736922 1.13034633,8.16600891 L0.0114542024,11.6995812 C-0.0117875006,11.7699704 0.000775499805,11.847129 0.0451841872,11.9067419 C0.0895928747,11.9663547 0.160377924,12.0010799 0.235232627,11.9999744 L6.76476737,11.9999744 C6.83962208,12.0010799 6.91040713,11.9663547 6.95481581,11.9067419 C6.9992245,11.847129 7.0117875,11.7699704 6.9885458,11.6995812 L5.86965367,8.16600891 Z" />
        <path d="M5.23523263,5.99997438 L11.7647674,5.99997438 C11.8396221,6.00107988 11.9104071,5.96635469 11.9548158,5.90674186 C11.9992245,5.84712902 12.0117875,5.76997039 11.9885458,5.69958121 L10.8696537,2.16600891 C10.8449769,2.0777471 10.7695628,2.01247811 10.6778436,2.00000216 L6.35412475,2.00000216 C6.25037486,1.99955911 6.15896629,2.06736922 6.13034633,2.16600891 L5.0114542,5.69167612 C4.9882125,5.76206531 5.0007755,5.83922394 5.04518419,5.89883677 C5.08959287,5.95844961 5.16037792,5.9931748 5.23523263,5.99206929 L5.23523263,5.99997438 Z" />
        <path d="M14.8696537,8.16600891 C14.8410337,8.06736922 14.7496251,7.99955911 14.6458753,8.00000216 L10.3541247,8.00000216 C10.2503749,7.99955911 10.1589663,8.06736922 10.1303463,8.16600891 L9.0114542,11.6995812 C8.9882125,11.7699704 9.0007755,11.847129 9.04518419,11.9067419 C9.08959287,11.9663547 9.16037792,12.0010799 9.23523263,11.9999744 L15.7647674,11.9999744 C15.8396221,12.0010799 15.9104071,11.9663547 15.9548158,11.9067419 C15.9992245,11.847129 16.0117875,11.7699704 15.9885458,11.6995812 L14.8696537,8.16600891 Z" />
        <path
          d="M4.71791702,6.99999727 L11.2901273,6.99999727 C11.5167877,7.00062459 11.7300437,6.89310174 11.8637377,6.71078513 C11.9974317,6.52846852 12.0353949,6.29340721 11.9658503,6.07852341 L10.8396453,2.4967946 C10.7517622,2.21259187 10.4943235,2.01385822 10.1960996,2 L5.84412197,2 C5.53393708,2.00025071 5.26004446,2.20161781 5.168399,2.4967946 L4.03414974,6.07852341 C3.96460507,6.29340721 4.00256833,6.52846852 4.13626232,6.71078513 C4.26995632,6.89310174 4.48321232,7.00062459 4.7098727,6.99999727 L4.71791702,6.99999727 Z M4.49267603,6.19871566 L5.61888098,2.64102529 C5.64768799,2.54104131 5.73969399,2.47230706 5.84412197,2.47275615 L10.1960996,2.47275615 C10.3005276,2.47230706 10.3925336,2.54104131 10.4213406,2.64102529 L11.5475456,6.2227541 C11.5709392,6.29410258 11.5582941,6.37231274 11.5135951,6.432738 C11.4688962,6.49316325 11.3976485,6.52836169 11.3223046,6.52724112 L4.71791702,6.52724112 C4.64257309,6.52836169 4.5713254,6.49316325 4.52662647,6.432738 C4.48192754,6.37231274 4.46928243,6.29410258 4.49267603,6.2227541 L4.49267603,6.19871566 Z"
          fill={fill}
          fillRule="nonzero"
        />
        <path
          d="M6.85119404,8.49671185 C6.75982728,8.20158423 6.48676763,8.00025067 6.17752607,8 L1.86284316,8 C1.5536016,8.00025067 1.28054194,8.20158423 1.18917519,8.49671185 L0.0343158245,12.077844 C-0.0370907158,12.2981821 0.00438648578,12.5395015 0.14527654,12.7234269 C0.286166594,12.9073523 0.508498315,13.0104232 0.740063216,12.9991644 L7.29228615,12.9991644 C7.51825722,12.9997916 7.73086467,12.8922867 7.86415207,12.7100004 C7.99743948,12.5277142 8.03528729,12.2926921 7.96595412,12.077844 L6.85119404,8.49671185 Z M7.48476272,12.4303492 C7.44019572,12.4919023 7.36832025,12.5278025 7.29228615,12.526487 L0.740063216,12.526487 C0.664948415,12.5276074 0.593917408,12.4924148 0.549354414,12.4319996 C0.50479142,12.3715844 0.492184767,12.2933873 0.515507228,12.2220507 L1.63828717,8.64091851 C1.66700657,8.54095119 1.75873276,8.47222839 1.86284316,8.4726774 L6.16950621,8.4726774 C6.27361661,8.47222839 6.3653428,8.54095119 6.3940622,8.64091851 L7.51684214,12.2220507 C7.54010119,12.2926138 7.52817808,12.3700331 7.48476272,12.4303492 Z"
          fill={fill}
          fillRule="nonzero"
        />
        <path
          d="M15.9658159,12.0785234 L14.8384774,8.4967946 C14.7467397,8.20161781 14.4725714,8.00025071 14.1620742,8 L9.83792575,8 C9.52742865,8.00025071 9.25326035,8.20161781 9.16152264,8.4967946 L8.03418411,12.0785234 C7.96456944,12.2934072 8.00257092,12.5284685 8.13639948,12.7107851 C8.27022804,12.8931017 8.4836987,13.0006246 8.71058723,12.9999973 L15.2894128,12.9999973 C15.5163013,13.0006246 15.729772,12.8931017 15.8636005,12.7107851 C15.9974291,12.5284685 16.0354306,12.2934072 15.9658159,12.0785234 L15.9658159,12.0785234 Z M15.4746184,12.4310873 C15.4298704,12.4926506 15.3577032,12.5285568 15.2813604,12.5272411 L8.71058723,12.5272411 C8.63516745,12.5283617 8.56384805,12.4931633 8.51910413,12.432738 C8.47436021,12.3723127 8.46170237,12.2941026 8.48511952,12.2227541 L9.61245805,8.64102529 C9.64129406,8.54104131 9.73339266,8.47230706 9.83792575,8.47275615 L14.1620742,8.47275615 C14.2666073,8.47230706 14.3587059,8.54104131 14.387542,8.64102529 L15.5148805,12.2227541 C15.5359592,12.2945982 15.5209723,12.3721472 15.4746184,12.4310873 L15.4746184,12.4310873 Z"
          fill={fill}
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

Gold.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
  ...Icon.propTypes,
};

Gold.defaultProps = {
  ...Icon.defaultProps,
  width: 16,
  height: 11,
  viewBox: '0 0 16 11',
};