import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'eu-west-1' });

async function sendMail(event, context) {
  const params = {
    Source: 'atulkumar.sharma711@gmail.com',
    Destination: {
      ToAddresses: ['atulkumar.sharma711@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello from auction project',
        },
      },
      Subject: {
        Data: 'Test Mail',
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export const handler = sendMail;
