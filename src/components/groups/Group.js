import React, { useContext } from 'react';

import { GroupContext, ContactContext } from '../../globalState';

const Group = ({ group }) => {
  const { selectedGroup, setSelectedGroup, addContact } = useContext(
    GroupContext
  );
  const { filterContacts } = useContext(ContactContext);

  const allowDrop = event => {
    event.preventDefault();
  };

  const drop = event => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    addContact(group.name, data);
  };
  return (
    <div
      className={
        selectedGroup && selectedGroup._id === group._id
          ? 'App-group App-group-selected'
          : 'App-group'
      }
      onClick={() => {
        if (selectedGroup && selectedGroup._id === group._id) {
          setSelectedGroup(null);
          filterContacts(null);
        } else {
          setSelectedGroup({ ...group });
          filterContacts(group.contacts);
        }
      }}
      onDrop={drop}
      onDragOver={allowDrop}
    >
      <div className="App-group-name">{group.name}</div>
      <div className="App-group-contacts">{group.contacts.length}</div>
    </div>
  );
};

export default Group;
