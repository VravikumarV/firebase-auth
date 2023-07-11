import React, {useState} from 'react';
import axios from 'axios';

function FileUpload(){
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
	const [isSelected, setIsSelected] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = () => {
    		const formData = new FormData();
    		formData.append('File', selectedFile);
    		console.log(selectedFile);
   		fetch(
    			'http://localhost:8282/kyc/services/uploadFile',
    			{
    				method: 'POST',
    				body: formData,
    			}
    		).then((response) => response.json())
    		    .then((result) => {
    				console.log('Success:', result);
    			})
    			.catch((error) => {
    				console.error('Error:', error);
    			});
    };

    return(
   <div>
			<input type="file" name="file" onChange={changeHandler} />
			{isSelected ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
		</div>
	)
}
export default FileUpload;