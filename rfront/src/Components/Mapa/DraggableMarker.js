import {Marker} from 'react-leaflet'
import React, {useState, useMemo, useCallback, useRef} from 'react'
import {IconLocation} from "./IconLocation";


export default function DraggableMarker(props) {

    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState(props.props)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
          }
          console.log(marker.getLatLng());
        },
      }),
      [],
    )
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
    }, [])
  
    return (
      <Marker
        icon={IconLocation}
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
      >
        <span onMouseOver={toggleDraggable}></span>

      </Marker>
    )
  }