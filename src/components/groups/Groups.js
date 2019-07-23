import React, { useContext, useState } from 'react';

import './Groups.css';
import { AuthContext, LanguageContext, GroupContext } from '../../globalState';
import Group from './Group';
import Icon from '../common/Icon';

const Groups = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { getText } = useContext(LanguageContext);
  const { groups, add } = useContext(GroupContext);

  const [newGroup, setNewGroup] = useState(false);
  const [groupName, setGroupName] = useState('');

  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if (name === 'groupName') {
      setGroupName(value);
    }
  };

  return (
    <div className="App-groups">
      {isAuthenticated() ? (
        <React.Fragment>
          <div className="App-groups-title">{getText('myGroups')}</div>
          <br />
          {newGroup ? (
            <div className="App-group-new ">
              <input
                type="text"
                className="App-input-text"
                autoFocus
                id="groupName"
                name="groupName"
                value={groupName}
                onChange={handleInputChange}
              />
              <button
                className="App-group-button"
                onClick={() => {
                  add(groupName);
                  setNewGroup(!newGroup);
                }}
              >
                <Icon icon="faSave" />
              </button>
            </div>
          ) : (
            <button
              className="App-group-button"
              onClick={() => {
                setNewGroup(!newGroup);
              }}
            >
              <Icon icon="faPlus" /> {getText('newGroup')}
            </button>
          )}
          <br />
          {groups &&
            groups.map(group => <Group key={group._id} group={group} />)}
        </React.Fragment>
      ) : (
        <div>Error</div>
      )}
    </div>
  );
};

export default Groups;
