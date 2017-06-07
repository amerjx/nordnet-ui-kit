import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Tin({
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
      <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd" transform="translate(-2.000000, 0.000000)">
        <path d="M12.7813333,6.02105263 C12.777049,4.03036679 11.4286832,2.2783864 9.46471233,1.71164698 C7.50074145,1.14490756 5.38677853,1.89777022 4.26492598,3.56348882 C3.14307342,5.22920742 3.27929711,7.41287775 4.6,8.93473684 L7.122,8.93473684 C5.65699339,8.43222684 4.77778404,6.97712301 5.04013489,5.48922083 C5.30248574,4.00131865 6.63005616,2.91357804 8.18366667,2.91357804 C9.73727717,2.91357804 11.0648476,4.00131865 11.3271984,5.48922083 C11.5895493,6.97712301 10.7103399,8.43222684 9.24533333,8.93473684 L11.6633333,8.93473684 C12.3820733,8.12436101 12.778646,7.09083018 12.7813333,6.02105263 Z" />
        <ellipse id="Oval" cx="8.188" cy="6.02105263" rx="2.912" ry="2.82947368" />
        <rect id="Rectangle-path" x="2.494" y="9.76842105" width="11.31" height="4.96" />
        <path d="M13.7953333,6.01263158 L14.064,5.43157895 L13.6826667,4.87578947 L13.7953333,4.14315789 L13.2146667,3.64631579 L13.2146667,2.98105263 L12.6253333,2.63578947 L12.4,1.99578947 L11.7066667,1.73473684 L11.3426667,1.12 L10.58,1.05263158 L10.1726667,0.572631579 L9.39266667,0.623157895 L8.87266667,0.244210526 L8.14466667,0.488421053 L7.55533333,0.244210526 L6.97466667,0.631578947 L6.25533333,0.538947368 L5.744,1.08631579 L5.02466667,1.08631579 L4.678,1.68421053 L3.93266667,1.86105263 L3.73333333,2.64421053 L3.10066667,2.93894737 L3.10066667,3.64631579 L2.50266667,4.05052632 L2.676,4.81684211 L2.25133333,5.34736842 L2.50266667,5.99578947 L2.25133333,6.62736842 L2.702,7.22526316 L2.598,7.91578947 L3.10933333,8.43789474 L3.10933333,8.76631579 L3.39533333,8.93473684 L4.40933333,8.93473684 C2.82597949,7.02971979 3.02787527,4.25943525 4.87171496,2.59023246 C6.71555464,0.921029676 9.57377869,0.921029676 11.4176184,2.59023246 C13.2614581,4.25943525 13.4633538,7.02971979 11.88,8.93473684 L13.1973333,8.93473684 L13.2666667,8.42105263 L13.7693333,7.94947368 L13.6826667,7.25052632 L14.0466667,6.68631579 L13.7953333,6.01263158 Z" />
        <path
          d="M14.038,6.01263158 L14.324,5.40631579 L13.9253333,4.81684211 L14.038,4.04210526 L13.44,3.53684211 L13.44,2.86315789 L12.8073333,2.52631579 L12.582,1.86947368 L11.8713333,1.6 L11.5333333,0.917894737 L10.6666667,0.842105263 L10.268,0.353684211 L9.462,0.404210526 L8.93333333,0 L8.15333333,0.261052632 L7.52933333,0 L6.92266667,0.404210526 L6.16866667,0.311578947 L5.64866667,0.842105263 L4.886,0.842105263 L4.53066667,1.50736842 L3.73333333,1.68421053 L3.55133333,2.52631579 L2.86666667,2.80421053 L2.86666667,3.53684211 L2.26,3.95789474 L2.442,4.8 L2,5.31368421 L2.26866667,5.99578947 L2,6.66105263 L2.468,7.28421053 L2.35533333,7.99157895 L2.87533333,8.51368421 L2.87533333,8.87578947 L3.066,8.99368421 L2,8.99368421 L2,9.75157895 L2.27733333,9.75157895 L2.27733333,14.8042105 L2,14.8042105 L2,15.6463158 L14.2806667,15.6463158 L14.2806667,14.8042105 L14.0293333,14.8042105 L14.0293333,9.75157895 L14.2806667,9.75157895 L14.2806667,8.99368421 L13.414,8.99368421 L13.5006667,8.53894737 L14.0293333,8.04210526 L13.934,7.30947368 L14.3153333,6.72 L14.038,6.01263158 Z M13.804,9.76 L13.804,14.72 L2.494,14.72 L2.494,9.76842105 L13.804,9.76 Z M11.3773333,6.01263158 C11.3766094,4.43722363 10.1595461,3.11305231 8.54858435,2.93493766 C6.9376226,2.75682301 5.44549611,3.781455 5.08052205,5.31642985 C4.71554799,6.8514047 5.59388957,8.40817365 7.122,8.93473684 L4.6,8.93473684 C2.99193685,7.11397243 3.1345555,4.38811038 4.92436378,2.7351908 C6.71417205,1.08227122 9.52316128,1.08227122 11.3129696,2.7351908 C13.1027778,4.38811038 13.2453965,7.11397243 11.6373333,8.93473684 L9.24533333,8.93473684 C10.5174144,8.49775369 11.3703924,7.3320368 11.3773333,6.02105263 L11.3773333,6.01263158 Z M8.188,8.85052632 C6.57974681,8.85052632 5.276,7.5837278 5.276,6.02105263 C5.276,4.45837747 6.57974681,3.19157895 8.188,3.19157895 C9.79625319,3.19157895 11.1,4.45837747 11.1,6.02105263 C11.1,7.5837278 9.79625319,8.85052632 8.188,8.85052632 L8.188,8.85052632 Z M13.804,7.94947368 L13.2666667,8.42105263 L13.1626667,8.96 L11.88,8.96 C13.4633538,7.05498295 13.2614581,4.28469841 11.4176184,2.61549562 C9.57377869,0.946292834 6.71555464,0.946292834 4.87171496,2.61549562 C3.02787527,4.28469841 2.82597949,7.05498295 4.40933333,8.96 L3.36066667,8.96 L3.07466667,8.79157895 L3.07466667,8.46315789 L2.598,7.91578947 L2.71066667,7.22526316 L2.25133333,6.62736842 L2.50266667,5.99578947 L2.25133333,5.34736842 L2.676,4.81684211 L2.50266667,4.05052632 L3.10066667,3.64631579 L3.10066667,2.93894737 L3.73333333,2.64421053 L3.93266667,1.90315789 L4.678,1.68421053 L5.02466667,1.05263158 L5.744,1.05263158 L6.25533333,0.538947368 L6.98333333,0.623157895 L7.55533333,0.244210526 L8.14466667,0.488421053 L8.87266667,0.244210526 L9.39266667,0.631578947 L10.1726667,0.581052632 L10.5886667,1.06105263 L11.3513333,1.12842105 L11.7153333,1.74315789 L12.4086667,2.00421053 L12.6253333,2.64421053 L13.2146667,2.98947368 L13.2146667,3.64631579 L13.7953333,4.14315789 L13.6826667,4.88421053 L14.064,5.44 L13.7953333,6.02105263 L14.0726667,6.69473684 L13.7086667,7.25894737 L13.804,7.94947368 Z"
          fill={fill}
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

Tin.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
  ...Icon.propTypes,
};

Tin.defaultProps = {
  ...Icon.defaultProps,
  height: 16,
  width: 13,
  viewBox: '0 0 13 16',
};
