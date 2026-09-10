import {Book1, PresentionChart, LocationTick, Setting2} from 'iconsax-react-native'

import {CHARACTERS, EPISODES, LOCATİONS, SETTİNGS} from '../utils/routes'

const TabIcon = ({screenName,color,focused,size}) => {

    if(screenName == CHARACTERS){

        return (

            <Book1 size={size} color={color} variant={focused ? "bold" : "outLine"} />

        )
    }

    if(screenName == EPISODES){

    return (

    <PresentionChart size={size} color={color} variant={focused ? "bold" : "outLine"} />

    )

}

    if(screenName == LOCATİONS){

        return (

    <LocationTick size={size} color={color} variant={focused ? "bold" : "outLine"} />

    )

    }

     if(screenName == SETTİNGS){

        return (

    <Setting2 size={size} color={color} variant={focused ? "bold" : "outLine"} />

    )

    }

}

export default TabIcon