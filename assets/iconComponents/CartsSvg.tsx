import React from "react";
import { Text, View } from "react-native";
import { Path , Svg} from "react-native-svg";
// import Svg from "react-native-web"
function CartsSvg({fill, stroke}){
    return (
        // xmlns="http://www.w3.org/2000/svg"
          <Svg width="32" height="32" viewBox="0 0 32 32" fill=""  >
            <Path d="M29.096 9.908C28.8467 9.548 28.4373 9.33333 28 9.33333H9.77732L8.23866 5.64C7.82266 4.64267 6.85732 4 5.77732 4H2.66666V6.66667H5.77732L12.1027 21.8467C12.3093 22.3427 12.7947 22.6667 13.3333 22.6667H24C24.556 22.6667 25.0533 22.3213 25.2493 21.8027L29.2493 11.136C29.4027 10.7253 29.3453 10.2667 29.096 9.908Z" fill={fill} />
            <Path d="M14 28C15.1046 28 16 27.1046 16 26C16 24.8954 15.1046 24 14 24C12.8954 24 12 24.8954 12 26C12 27.1046 12.8954 28 14 28Z" fill="" />
            <Path d="M23.3333 28C24.4379 28 25.3333 27.1046 25.3333 26C25.3333 24.8954 24.4379 24 23.3333 24C22.2288 24 21.3333 24.8954 21.3333 26C21.3333 27.1046 22.2288 28 23.3333 28Z" fill={fill} />
        </Svg>
        
    )
}

export default CartsSvg;