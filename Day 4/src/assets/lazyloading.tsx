import React, { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import landing_animation_1 from "./Animation - 1710995328444.json";

import PropTypes from "prop-types";

interface LazyLoadingProps {
  onLoadComplete: () => void;
}

const LazyLoading: React.FC<LazyLoadingProps> = ({ onLoadComplete }) => {
  const lazyRef = useRef<LottieRefCurrentProps>(null);

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col items-center justify-center">
      <Lottie
        animationData={landing_animation_1}
      />
      <div className="text-2xl font-bold text-gray-700 mt-4">
        Loading...
      </div>
    </div>
  );
};

LazyLoading.propTypes = {
  onLoadComplete: PropTypes.func.isRequired,
};

export default LazyLoading;
