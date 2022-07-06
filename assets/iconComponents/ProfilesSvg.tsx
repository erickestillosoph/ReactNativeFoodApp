import React from "react";
import { Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function ProfilesSvg({fill}){
    //  xmlns="http://www.w3.org/2000/svg"
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="">
            <Path d="M10 8.66666C10 11.9747 12.692 14.6667 16 14.6667C19.308 14.6667 22 11.9747 22 8.66666C22 5.35866 19.308 2.66666 16 2.66666C12.692 2.66666 10 5.35866 10 8.66666ZM26.6667 28H28V26.6667C28 21.5213 23.812 17.3333 18.6667 17.3333H13.3333C8.18667 17.3333 4 21.5213 4 26.6667V28H5.33333H6.66667H25.3333H26.6667Z" fill={fill} />
        </Svg>
    )
}

export default ProfilesSvg;