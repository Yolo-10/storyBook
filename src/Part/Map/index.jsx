import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { GoogleMap, LoadScript, InfoWindow } from '@react-google-maps/api';
import Title from '../../Title';

import './index.scss'

const KEY = "AIzaSyBDG2YUxXicahL-Zy21Gu7YZkgqYyT5kbc"

const Map =({background,color,title,line,name,center,zoom,code,phone,fax,addr})=> {

  let mapData = {
    mapContainerStyle: {
      width: '100%',
      height: '450px'
    },
    options:{
      mapTypeControl: false
    },
    background,color,title,line,name,center,zoom,code,phone,fax,addr
  }

  return (
    <div className="sc-map" style={{background:`${background}`, color:`${color}`}}>
      <Title title={title} line={line} />

      <LoadScript googleMapsApiKey={KEY} >
        <GoogleMap {...mapData} >
          <InfoWindow position={center} >
            <div class="m-info">
              <h1>{name}</h1>
              <p>
                <span>{code}</span>
                <span>{phone}</span>
                <span>{fax}</span>
                <span>{addr}</span>
              </p>
            </div>
          </InfoWindow>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

Map.propTypes = {
  /** 背景色 */
  background: PropTypes.string,
  /** 文字色 */
  color: PropTypes.string,
  /** 标题 */
  title: PropTypes.string,
  /** 标题是否显示线段 */
  line: PropTypes.bool,
  name:PropTypes.string,
  center: PropTypes.object,
  zoom: PropTypes.number,
  code: PropTypes.string,
  phone:PropTypes.string ,
  fax: PropTypes.string,
  addr: PropTypes.string,
}

Map.defaultProps={
  background: '#fff',
  color:'#333',
  title: 'xxx',
  line:true,
  center: {},
  zoom: 17,
  code: '',
  phone: '',
  fax: '',
  addr:'',
}


export default React.memo(Map)

