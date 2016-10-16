/**
 * Created by pheadra on 9/11/16.
 */
import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

export default createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h"
               changeMonitorKey="ctrl-m"
               defaultPosition="right"
               changePositionKey="ctrl-w">
    <LogMonitor />
  </DockMonitor>
)
