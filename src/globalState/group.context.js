import React, { createContext, useState } from 'react';

import { GroupService } from '../service/group.service';

export const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const [groups, setGroups] = useState();

  const [selectedGroup, setSelectedGroup] = useState();

  const loadGroups = async () => {
    setGroups(await GroupService.get());
  };

  const save = async (group, isNew) => {
    return await GroupService.save(group, isNew);
  };

  const add = async groupName => {
    const newGroup = { name: groupName, contacts: [] };
    const groupsCopy = [...groups];
    groupsCopy.push(newGroup);
    save(newGroup, true);
    loadGroups();
  };

  const addContact = async (groupName, contactId) => {
    const groupsCopy = [...groups];
    const group = groupsCopy.find(group => {
      return group.name === groupName;
    });
    const isAddedContact = group.contacts.find(contact => {
      return contact._id === contactId;
    });
    if (!isAddedContact || group.contacts.length === 0) {
      group.contacts.push(contactId);
      save(group, false);
      loadGroups();
    }
  };

  const deleteContact = async (groupName, contactId) => {
    const groupsCopy = [...groups];
    const group = groupsCopy.find(group => {
      return group.name === groupName;
    });
    group.contacts = group.contacts.filter(contact => {
      return contact._id !== contactId;
    });
    const selectedGroupUpdated = await save(group, false);
    setSelectedGroup(selectedGroupUpdated);
    loadGroups();
    return selectedGroupUpdated;
  };

  const unloadGroups = async () => {
    return new Promise((resolve, reject) => {
      setGroups(null);
      setSelectedGroup(null);
      resolve(true);
    });
  };

  const edit = groupName => {
    const newGroup = { name: groupName, contacts: [] };
    const groupsCopy = [...groups];
    groupsCopy.push(newGroup);
    save(newGroup, false);
    loadGroups();
  };

  const remove = async groupId => {
    console.log(groupId);
    await GroupService.delete(groupId);
    loadGroups();
  };

  return (
    <GroupContext.Provider
      value={{
        groups,
        selectedGroup,
        setSelectedGroup,
        loadGroups,
        addContact,
        deleteContact,
        add,
        edit,
        remove,
        unloadGroups
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};
