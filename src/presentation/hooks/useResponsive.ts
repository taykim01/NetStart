import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeWidth } from "../states/features/responsiveSlice";

export const useViewportWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    const breakingPoints = {
      mobile: 768,
      tablet: 1024,
    };

    let responsive;
    if (width <= breakingPoints.mobile) { // 모바일
      responsive = "mobile";
    } else if ( // 태블릿
      breakingPoints.mobile < width &&
      width <= breakingPoints.tablet
    ) {
      responsive = "mobile";
    } else { // 데스크탑
      responsive = "desktop";
    }

    dispatch(
      changeWidth({
        width: width,
        responsive: responsive,
      })
    );

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, width]);
};
