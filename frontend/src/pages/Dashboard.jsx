import React from 'react'
import TaskBoard from '../components/TaskBoard'
import TaskModal from "../components/TaskModal"
import Navbar from '../components/Navbar'

export default function Dashboard() {
  return (
    <>
    <Navbar/>
    <TaskBoard/>
    <TaskModal/>
    </>
    
  )
}