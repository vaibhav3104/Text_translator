const PROCESS_DELAY = 200;


const translate = ({text, from="en",to="en"}) => {

    return new Promise((resolve, reject) => {
       
        const sampleResponse={
            converted_text:`this text supposed to be result in ${to} language!`,
            from,
            to,
            text
        }
        setTimeout(() => {
            resolve(sampleResponse)
        }, PROCESS_DELAY);
    })
}


module.exports ={ translate};

