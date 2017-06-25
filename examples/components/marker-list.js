import React, { Component } from 'react';
import { Map, MarkerList } from '../../src'
import {simpleMapStyle} from './mapstyle'

var citylist = [{"time":"201706011715","citycode":"48","cityname":"哈尔滨","index":"2.45","last_index":"2.45","index_level":4,"speed":"20.51","city_coords":"14086790.68,5718671.60","provincecode":2,"provincename":"黑龙江","weekRate":0},{"time":"201706011715","citycode":"53","cityname":"长春","index":"2.08","last_index":"1.95","index_level":4,"speed":"24.86","city_coords":"13951842.48,5408037.28","provincecode":9,"provincename":"吉林","weekRate":0.067},{"time":"201706011715","citycode":"167","cityname":"大连","index":"1.86","last_index":"1.84","index_level":4,"speed":"26.37","city_coords":"13538978.63,4683030.35","provincecode":19,"provincename":"辽宁","weekRate":0.011},{"time":"201706011715","citycode":"288","cityname":"济南","index":"1.68","last_index":"1.85","index_level":3,"speed":"29.92","city_coords":"13024668.93,4367677.68","provincecode":8,"provincename":"山东","weekRate":-0.092},{"time":"201706011715","citycode":"58","cityname":"沈阳","index":"1.67","last_index":"1.79","index_level":3,"speed":"28.12","city_coords":"13741313.13,5104005.77","provincecode":19,"provincename":"辽宁","weekRate":-0.067},{"time":"201706011715","citycode":"131","cityname":"北京","index":"1.64","last_index":"1.94","index_level":3,"speed":"32.02","city_coords":"12959238.56,4825347.47","provincecode":131,"provincename":"北京","weekRate":-0.155},{"time":"201706011715","citycode":"289","cityname":"上海","index":"1.62","last_index":"1.83","index_level":3,"speed":"31.34","city_coords":"13523265.31,3641114.64","provincecode":289,"provincename":"上海","weekRate":-0.115},{"time":"201706011715","citycode":"132","cityname":"重庆","index":"1.62","last_index":"1.62","index_level":3,"speed":"31.45","city_coords":"11862018.46,3427244.19","provincecode":132,"provincename":"重庆","weekRate":0},{"time":"201706011715","citycode":"178","cityname":"温州","index":"1.60","last_index":"1.48","index_level":3,"speed":"29.70","city_coords":"13437062.10,3228868.44","provincecode":29,"provincename":"浙江","weekRate":0.081},{"time":"201706011715","citycode":"257","cityname":"广州","index":"1.58","last_index":"1.71","index_level":3,"speed":"33.33","city_coords":"12609384.20,2631450.58","provincecode":7,"provincename":"广东","weekRate":-0.076},{"time":"201706011715","citycode":"75","cityname":"成都","index":"1.57","last_index":"1.65","index_level":3,"speed":"36.07","city_coords":"11585280.82,3555907.48","provincecode":32,"provincename":"四川","weekRate":-0.048},{"time":"201706011715","citycode":"158","cityname":"长沙","index":"1.57","last_index":"1.60","index_level":3,"speed":"32.76","city_coords":"12573153.72,3258106.27","provincecode":26,"provincename":"湖南","weekRate":-0.019},{"time":"201706011715","citycode":"146","cityname":"贵阳","index":"1.55","last_index":"1.52","index_level":3,"speed":"30.99","city_coords":"11870885.18,3060812.20","provincecode":24,"provincename":"贵州","weekRate":0.02},{"time":"201706011715","citycode":"179","cityname":"杭州","index":"1.55","last_index":"1.56","index_level":3,"speed":"34.04","city_coords":"13376484.03,3517857.39","provincecode":29,"provincename":"浙江","weekRate":-0.006},{"time":"201706011715","citycode":"150","cityname":"石家庄","index":"1.54","last_index":"1.67","index_level":3,"speed":"34.11","city_coords":"12748538.99,4559724.44","provincecode":25,"provincename":"河北","weekRate":-0.078},{"time":"201706011715","citycode":"218","cityname":"武汉","index":"1.53","last_index":"1.58","index_level":3,"speed":"31.25","city_coords":"12725273.29,3558757.28","provincecode":15,"provincename":"湖北","weekRate":-0.032},{"time":"201706011715","citycode":"127","cityname":"合肥","index":"1.53","last_index":"1.54","index_level":3,"speed":"32.72","city_coords":"13050732.25,3717865.48","provincecode":23,"provincename":"安徽","weekRate":-0.006},{"time":"201706011715","citycode":"233","cityname":"西安","index":"1.51","last_index":"1.66","index_level":3,"speed":"34.56","city_coords":"12127979.30,4051219.02","provincecode":27,"provincename":"陕西","weekRate":-0.09},{"time":"201706011715","citycode":"334","cityname":"嘉兴","index":"1.50","last_index":"1.52","index_level":3,"speed":"36.88","city_coords":"13443315.62,3578394.42","provincecode":29,"provincename":"浙江","weekRate":-0.013},{"time":"201706011715","citycode":"236","cityname":"青岛","index":"1.50","last_index":"1.57","index_level":3,"speed":"35.17","city_coords":"13401837.54,4285189.34","provincecode":8,"provincename":"山东","weekRate":-0.045},{"time":"201706011715","citycode":"261","cityname":"南宁","index":"1.50","last_index":"1.60","index_level":3,"speed":"32.55","city_coords":"12064197.51,2593908.90","provincecode":17,"provincename":"广西","weekRate":-0.063},{"time":"201706011715","citycode":"300","cityname":"福州","index":"1.49","last_index":"1.55","index_level":2,"speed":"33.18","city_coords":"13280886.83,2990092.74","provincecode":16,"provincename":"福建","weekRate":-0.039},{"time":"201706011715","citycode":"332","cityname":"天津","index":"1.49","last_index":"1.63","index_level":2,"speed":"34.08","city_coords":"13047444.58,4707506.67","provincecode":332,"provincename":"天津","weekRate":-0.086},{"time":"201706011715","citycode":"303","cityname":"汕头","index":"1.47","last_index":"1.55","index_level":2,"speed":"30.62","city_coords":"12989872.35,2658432.29","provincecode":7,"provincename":"广东","weekRate":-0.052},{"time":"201706011715","citycode":"104","cityname":"昆明","index":"1.47","last_index":"1.67","index_level":2,"speed":"34.04","city_coords":"11448183.93,2843599.61","provincecode":28,"provincename":"云南","weekRate":-0.12},{"time":"201706011715","citycode":"315","cityname":"南京","index":"1.47","last_index":"1.61","index_level":2,"speed":"34.84","city_coords":"13225221.26,3748918.53","provincecode":18,"provincename":"江苏","weekRate":-0.087},{"time":"201706011715","citycode":"301","cityname":"惠州","index":"1.45","last_index":"1.51","index_level":2,"speed":"35.61","city_coords":"12737687.42,2629176.06","provincecode":7,"provincename":"广东","weekRate":-0.04},{"time":"201706011715","citycode":"125","cityname":"海口","index":"1.45","last_index":"1.49","index_level":2,"speed":"30.92","city_coords":"12268256.50,2264181.59","provincecode":21,"provincename":"海南","weekRate":-0.027},{"time":"201706011715","citycode":"268","cityname":"郑州","index":"1.42","last_index":"1.53","index_level":2,"speed":"36.37","city_coords":"12649521.59,4105848.27","provincecode":30,"provincename":"河南","weekRate":-0.072},{"time":"201706011715","citycode":"340","cityname":"深圳","index":"1.42","last_index":"1.49","index_level":2,"speed":"38.93","city_coords":"12697919.69,2560977.31","provincecode":7,"provincename":"广东","weekRate":-0.047},{"time":"201706011715","citycode":"333","cityname":"金华","index":"1.42","last_index":"1.41","index_level":2,"speed":"34.59","city_coords":"13319970.32,3365439.56","provincecode":29,"provincename":"浙江","weekRate":0.007},{"time":"201706011715","citycode":"92","cityname":"乌鲁木齐","index":"1.40","last_index":"1.42","index_level":2,"speed":"37.91","city_coords":"9754288.85,5409732.61","provincecode":12,"provincename":"新疆维吾尔自治区","weekRate":-0.014},{"time":"201706011715","citycode":"138","cityname":"佛山","index":"1.40","last_index":"1.46","index_level":2,"speed":"37.69","city_coords":"12593536.51,2618504.74","provincecode":7,"provincename":"广东","weekRate":-0.041},{"time":"201706011715","citycode":"317","cityname":"无锡","index":"1.40","last_index":"1.37","index_level":2,"speed":"40.38","city_coords":"13393990.44,3674896.25","provincecode":18,"provincename":"江苏","weekRate":0.022},{"time":"201706011715","citycode":"316","cityname":"徐州","index":"1.39","last_index":"1.38","index_level":2,"speed":"34.66","city_coords":"13057066.72,4032808.36","provincecode":18,"provincename":"江苏","weekRate":0.007},{"time":"201706011715","citycode":"119","cityname":"东莞","index":"1.39","last_index":"1.43","index_level":2,"speed":"39.75","city_coords":"12663646.09,2618419.30","provincecode":7,"provincename":"广东","weekRate":-0.028},{"time":"201706011715","citycode":"321","cityname":"呼和浩特","index":"1.39","last_index":"1.49","index_level":2,"speed":"38.00","city_coords":"12441036.70,4961658.65","provincecode":22,"provincename":"内蒙古自治区","weekRate":-0.067},{"time":"201706011715","citycode":"180","cityname":"宁波","index":"1.39","last_index":"1.47","index_level":2,"speed":"39.66","city_coords":"13531775.58,3466675.15","provincecode":29,"provincename":"浙江","weekRate":-0.054},{"time":"201706011715","citycode":"348","cityname":"常州","index":"1.37","last_index":"1.39","index_level":2,"speed":"41.63","city_coords":"13356273.65,3716551.52","provincecode":18,"provincename":"江苏","weekRate":-0.014},{"time":"201706011715","citycode":"153","cityname":"洛阳","index":"1.36","last_index":"1.36","index_level":2,"speed":"33.07","city_coords":"12519129.85,4088448.61","provincecode":30,"provincename":"河南","weekRate":0},{"time":"201706011715","citycode":"224","cityname":"苏州","index":"1.35","last_index":"1.38","index_level":2,"speed":"42.63","city_coords":"13424120.33,3649961.01","provincecode":18,"provincename":"江苏","weekRate":-0.022},{"time":"201706011715","citycode":"163","cityname":"南昌","index":"1.35","last_index":"1.42","index_level":2,"speed":"35.45","city_coords":"12898120.55,3315255.29","provincecode":31,"provincename":"江西","weekRate":-0.049},{"time":"201706011715","citycode":"326","cityname":"烟台","index":"1.35","last_index":"1.35","index_level":2,"speed":"41.28","city_coords":"13520391.89,4478567.99","provincecode":8,"provincename":"山东","weekRate":0},{"time":"201706011715","citycode":"346","cityname":"扬州","index":"1.34","last_index":"1.35","index_level":2,"speed":"38.35","city_coords":"13293818.84,3792807.67","provincecode":18,"provincename":"江苏","weekRate":-0.007},{"time":"201706011715","citycode":"194","cityname":"厦门","index":"1.33","last_index":"1.45","index_level":2,"speed":"35.68","city_coords":"13146520.15,2794850.59","provincecode":16,"provincename":"福建","weekRate":-0.083},{"time":"201706011715","citycode":"176","cityname":"太原","index":"1.32","last_index":"1.37","index_level":2,"speed":"40.41","city_coords":"12529930.90,4535569.28","provincecode":10,"provincename":"山西","weekRate":-0.036},{"time":"201706011715","citycode":"287","cityname":"潍坊","index":"1.27","last_index":"1.31","index_level":2,"speed":"45.37","city_coords":"13265880.80,4373425.72","provincecode":8,"provincename":"山东","weekRate":-0.031},{"time":"201706011715","citycode":"134","cityname":"泉州","index":"1.25","last_index":"1.33","index_level":2,"speed":"38.47","city_coords":"13211798.77,2842902.63","provincecode":16,"provincename":"福建","weekRate":-0.06},{"time":"201706011715","citycode":"161","cityname":"南通","index":"1.24","last_index":"1.25","index_level":2,"speed":"48.73","city_coords":"13458706.40,3738531.15","provincecode":18,"provincename":"江苏","weekRate":-0.008}];
citylist = citylist.map((item) => {
    return {
        text: item.cityname,
        count: item.index_level,
        location: item.city_coords
    }
});

export default class App extends Component {
    render() {
        return <Map mapStyle={simpleMapStyle}>
            <MarkerList 
                data={citylist} 
                onClick={(item)=>{
                    console.log(item);
                }} 
                splitList={{
                    4: '#d53938',
                    3: '#fe6261',
                    2: '#ffb02d',
                    1: '#80db69'
                }} 
                coordType="bd09mc" 
                isShowShadow={false} 
                animation={true} 
                multiple={true} 
                autoViewport={false}
            />
        </Map>
    }
}

