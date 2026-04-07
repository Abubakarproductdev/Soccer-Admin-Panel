import React, { useEffect, useRef } from 'react';
import { useCountUp } from 'react-countup';

const AnimatedNumber = ({ value, prefix = "", suffix = "", decimals = 0, duration = 1.5, className = "" }) => {
  const countUpRef = useRef(null);

  // Extract number from string if provided
  let numericValue = (typeof value === 'number') ? value : 0;
  let detectedPrefix = prefix;
  let detectedSuffix = suffix;

  if (typeof value === 'string') {
    try {
      if (value.startsWith('$')) {
        detectedPrefix = '$';
        numericValue = parseFloat(value.replace(/[$,]/g, ''));
      } else if (value.endsWith('%')) {
        detectedSuffix = '%';
        numericValue = parseFloat(value.replace(/[%]/g, ''));
      } else if (value.endsWith('K')) {
        detectedSuffix = 'K';
        numericValue = parseFloat(value.replace(/[K]/g, ''));
      } else if (value.endsWith('ms')) {
        detectedSuffix = 'ms';
        numericValue = parseFloat(value.replace(/[ms]/g, ''));
      } else {
        numericValue = parseFloat(value.replace(/,/g, ''));
      }
    } catch (e) {
      numericValue = 0;
    }
  }

  const { update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: Number.isFinite(numericValue) ? numericValue : 0,
    duration: duration,
    separator: ",",
    decimals: decimals,
    prefix: detectedPrefix,
    suffix: detectedSuffix,
  });

  useEffect(() => {
    if (Number.isFinite(numericValue)) {
      update(numericValue);
    }
  }, [numericValue, update]);

  if (value === undefined || value === null) return null;
  if (!Number.isFinite(numericValue)) return <span className={className}>{value}</span>;

  return <span ref={countUpRef} className={className} />;
};

export default AnimatedNumber;
