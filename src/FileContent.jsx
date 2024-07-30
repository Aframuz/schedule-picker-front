import React, {useState, useEffect} from 'react';

const FileContent = () => {
    const [content, setContent ] = useState('');

    useEffect(()=> {
        const fetchFileContent = async () => {
            try {
                const response = await fetch('schedules.txt');
                const text = await response.text();
                setContent(text)
            } catch( error){
                console.error('Error fetching file content', error)
            }
        };

        fetchFileContent();
    }, []);

    return (
        <div>
            <h2>File Content</h2>
            <pre>{content}</pre>
        </div>
    );
};

export default FileContent