import React from 'react'
import AddUsers from './components/AddUsers'
import DisplayUsers from './components/DisplayUsers'
import SelectedUserDetails from './components/SelectedUserDetails'

type UserManagerProps = {}

const UsersManager = (props: UserManagerProps) => {
  return (
    <div className="container py-8 mx-auto">
      <div className="grid grid-cols-12 gap-4 px-4">
        <div className="col-span-4">
          <AddUsers />
        </div>
        <div className="col-span-4">
          <DisplayUsers />
        </div>
        <div className="col-span-4">
          <SelectedUserDetails />
        </div>
      </div>
    </div>
  )
}

export default UsersManager
