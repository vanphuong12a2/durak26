import fetchMock from 'fetch-mock';
import apiFetch from './apiFetch';

describe('api fetch', () => {
  const url = 'anyUrl';

  beforeEach(() => {
    fetchMock.restore();
  });

  it('should throw error with the response status when fetch response is not 200', async () => {
    fetchMock.getOnce(url, {status: 400});

    await apiFetch(url)
      .then((response) => fail(`expect error but received ${response.body}`))
      .catch((error: Error) => expect(error.message).toEqual('Status code is not 200'));
  });

  it('should parse response to json when success', async () => {
    fetchMock.getOnce(url, {status: 200, body: {someField: 'some-value'}});

    await apiFetch(url)
      .then((response) => expect(response.someField).toEqual('some-value'))
      .catch((error: Error) => fail(`expect json but got ${error}`));
  });
});
