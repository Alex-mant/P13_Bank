import './styles.scss';

const MainUserHeaderEditSaveOrCancel = ({ isTheButtonNameEditClicked, setisTheButtonEditNameClicked, setUserFullName}) => {

  const save = () => {
    const firstName = document.querySelector(".nameInput").value;
    const lastName = document.querySelector(".surnameInput").value;
    
    setUserFullName({firstName: firstName, lastName: lastName});
    setisTheButtonEditNameClicked(false);   
  }

  return (
    <>
      <div className="saveOrCancel" style={{display: isTheButtonNameEditClicked ? 'flex' : 'none'}}>
        <button className="edit-button" onClick={() => {save()}}>Save</button>
        <button className="edit-button" onClick={() => {setisTheButtonEditNameClicked(false)}}>Cancel</button>
      </div>
      <button className="edit-button" style={{display: isTheButtonNameEditClicked ? 'none' : 'block'}} onClick={() => {setisTheButtonEditNameClicked(true)}}>Edit Name</button>
    </>
  )
}

export default MainUserHeaderEditSaveOrCancel;