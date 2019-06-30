import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faCoffee,
  faLaptopCode,
  faGraduationCap,
  faBriefcase,
  faArrowRight,
  faArrowDown,
  faArrowLeft,
  faCaretRight,
  faCertificate,
  faCheck,
  faSearch,
  faBold,
  faItalic,
  faUnderline,
  faListOl,
  faListUl,
  faHeading,
  faEdit,
  faSave,
  faLink,
  faImage,
  faTrash,
  faPlus,
  faMinus,
  faSignInAlt,
  faSignOutAlt,
  faCheckCircle,
  faExclamationCircle,
  faTimes,
  faSpinner,
  faDungeon,
  faUsers,
  faUserPlus,
  faUserEdit,
  faUserMinus,
  faHome,
  faCalendar,
  faCalendarAlt,
  faCalendarMinus,
  faCalendarPlus,
  faAngleDoubleLeft,
  faAngleLeft,
  faAngleDoubleRight,
  faAngleRight,
  faUserGraduate,
  faCogs,
  faUndoAlt,
  faUniversity,
  faPhone,
  faAddressCard
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faJava,
  faHtml5,
  faCss3,
  faJs,
  faAngular,
  faReact,
  faBootstrap,
  faNode
} from '@fortawesome/free-brands-svg-icons';

const Icon = props => (
  <React.Fragment>
    {props.icon === 'faTwitter' ? (
      <FontAwesomeIcon icon={faTwitter} />
    ) : props.icon === 'faGithub' ? (
      <FontAwesomeIcon icon={faGithub} />
    ) : props.icon === 'faLinkedin' ? (
      <FontAwesomeIcon icon={faLinkedin} />
    ) : props.icon === 'faEnvelope' ? (
      <FontAwesomeIcon icon={faEnvelope} />
    ) : props.icon === 'faJava' ? (
      <FontAwesomeIcon icon={faJava} />
    ) : props.icon === 'faHtml5' ? (
      <FontAwesomeIcon icon={faHtml5} />
    ) : props.icon === 'faCss3' ? (
      <FontAwesomeIcon icon={faCss3} />
    ) : props.icon === 'faJs' ? (
      <FontAwesomeIcon icon={faJs} />
    ) : props.icon === 'faAngular' ? (
      <FontAwesomeIcon icon={faAngular} />
    ) : props.icon === 'faReact' ? (
      <FontAwesomeIcon icon={faReact} />
    ) : props.icon === 'faBootstrap' ? (
      <FontAwesomeIcon icon={faBootstrap} />
    ) : props.icon === 'faNode' ? (
      <FontAwesomeIcon icon={faNode} />
    ) : props.icon === 'faCaretRight' ? (
      <FontAwesomeIcon icon={faCaretRight} />
    ) : props.icon === 'faLaptopCode' ? (
      <FontAwesomeIcon icon={faLaptopCode} />
    ) : props.icon === 'faArrowRight' ? (
      <FontAwesomeIcon icon={faArrowRight} />
    ) : props.icon === 'faArrowDown' ? (
      <FontAwesomeIcon icon={faArrowDown} />
    ) : props.icon === 'faArrowLeft' ? (
      <FontAwesomeIcon icon={faArrowLeft} />
    ) : props.icon === 'faGraduationCap' ? (
      <FontAwesomeIcon icon={faGraduationCap} />
    ) : props.icon === 'faBriefcase' ? (
      <FontAwesomeIcon icon={faBriefcase} />
    ) : props.icon === 'faUser' ? (
      <FontAwesomeIcon icon={faUser} />
    ) : props.icon === 'faCertificate' ? (
      <FontAwesomeIcon icon={faCertificate} />
    ) : props.icon === 'faCheck' ? (
      <FontAwesomeIcon icon={faCheck} />
    ) : props.icon === 'faSearch' ? (
      <FontAwesomeIcon icon={faSearch} />
    ) : props.icon === 'faBold' ? (
      <FontAwesomeIcon icon={faBold} />
    ) : props.icon === 'faItalic' ? (
      <FontAwesomeIcon icon={faItalic} />
    ) : props.icon === 'faUnderline' ? (
      <FontAwesomeIcon icon={faUnderline} />
    ) : props.icon === 'faListOl' ? (
      <FontAwesomeIcon icon={faListOl} />
    ) : props.icon === 'faListUl' ? (
      <FontAwesomeIcon icon={faListUl} />
    ) : props.icon === 'faHeading' ? (
      <FontAwesomeIcon icon={faHeading} />
    ) : props.icon === 'faEdit' ? (
      <FontAwesomeIcon icon={faEdit} />
    ) : props.icon === 'faSave' ? (
      <FontAwesomeIcon icon={faSave} />
    ) : props.icon === 'faLink' ? (
      <FontAwesomeIcon icon={faLink} />
    ) : props.icon === 'faImage' ? (
      <FontAwesomeIcon icon={faImage} />
    ) : props.icon === 'faTrash' ? (
      <FontAwesomeIcon icon={faTrash} />
    ) : props.icon === 'faPlus' ? (
      <FontAwesomeIcon icon={faPlus} />
    ) : props.icon === 'faMinus' ? (
      <FontAwesomeIcon icon={faMinus} />
    ) : props.icon === 'faSignInAlt' ? (
      <FontAwesomeIcon icon={faSignInAlt} />
    ) : props.icon === 'faSignOutAlt' ? (
      <FontAwesomeIcon icon={faSignOutAlt} />
    ) : props.icon === 'faCheckCircle' ? (
      <FontAwesomeIcon icon={faCheckCircle} />
    ) : props.icon === 'faExclamationCircle' ? (
      <FontAwesomeIcon icon={faExclamationCircle} />
    ) : props.icon === 'faTimes' ? (
      <FontAwesomeIcon icon={faTimes} />
    ) : props.icon === 'faSpinner' ? (
      <FontAwesomeIcon icon={faSpinner} />
    ) : props.icon === 'faDungeon' ? (
      <FontAwesomeIcon icon={faDungeon} />
    ) : props.icon === 'faUsers' ? (
      <FontAwesomeIcon icon={faUsers} />
    ) : props.icon === 'faUserPlus' ? (
      <FontAwesomeIcon icon={faUserPlus} />
    ) : props.icon === 'faUserEdit' ? (
      <FontAwesomeIcon icon={faUserEdit} />
    ) : props.icon === 'faUserMinus' ? (
      <FontAwesomeIcon icon={faUserMinus} />
    ) : props.icon === 'faCalendarMinus' ? (
      <FontAwesomeIcon icon={faCalendarMinus} />
    ) : props.icon === 'faCalendarAlt' ? (
      <FontAwesomeIcon icon={faCalendarAlt} />
    ) : props.icon === 'faCalendarPlus' ? (
      <FontAwesomeIcon icon={faCalendarPlus} />
    ) : props.icon === 'faHome' ? (
      <FontAwesomeIcon icon={faHome} />
    ) : props.icon === 'faAngleLeft' ? (
      <FontAwesomeIcon icon={faAngleLeft} />
    ) : props.icon === 'faAngleDoubleLeft' ? (
      <FontAwesomeIcon icon={faAngleDoubleLeft} />
    ) : props.icon === 'faAngleRight' ? (
      <FontAwesomeIcon icon={faAngleRight} />
    ) : props.icon === 'faAngleDoubleRight' ? (
      <FontAwesomeIcon icon={faAngleDoubleRight} />
    ) : props.icon === 'faCalendar' ? (
      <FontAwesomeIcon icon={faCalendar} />
    ) : props.icon === 'faUserGraduate' ? (
      <FontAwesomeIcon icon={faUserGraduate} />
    ) : props.icon === 'faCogs' ? (
      <FontAwesomeIcon icon={faCogs} />
    ) : props.icon === 'faUndoAlt' ? (
      <FontAwesomeIcon icon={faUndoAlt} />
    ) : props.icon === 'faUniversity' ? (
      <FontAwesomeIcon icon={faUniversity} />
    ) : props.icon === 'faPhone' ? (
      <FontAwesomeIcon icon={faPhone} />
    ) : props.icon === 'faAddressCard' ? (
      <FontAwesomeIcon icon={faAddressCard} />
    ) : props.icon === 'faCoffee' ? (
      <FontAwesomeIcon icon={faCoffee} />
    ) : (
      <div />
    )}
  </React.Fragment>
);
export default Icon;
