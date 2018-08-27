import {Actions, ActionConst} from "react-native-router-flux";

export const redirectTo = (scene) => {
    if (Actions.currentScene) {
        Actions.reset(scene);
    }
}

export const navigateTo = (scene, props = null) => {
    if(props) {
        Actions.push(scene, props);
    } else {
        Actions[scene].call();
    }
}

export const navigateBack = () => {
    Actions.pop();
}

export const arrayChunking = (num, arr) => {
    const newArr = [];
    let count = 0;
    arr.forEach((el) => {
        if(newArr.length > 0 && count % num !== 0) {
            newArr[newArr.length - 1].push(el);
        } else {
            newArr.push([el]);
        }
        count++;
    })
    return newArr;
}

export const gcd = (a, b) => {
    return (b == 0) ? a : gcd (b, a%b);
}
