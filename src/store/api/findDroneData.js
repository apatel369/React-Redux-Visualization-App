import "isomorphic-fetch";
let countFetch = 0;
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const fetchDroneData = async () => {
    // Using the create-react-app's proxy for CORS issues
    if (countFetch > 0) {
        await timeout(3000);
    }
    countFetch++;
    const response = await fetch(
        `https://react-assessment-api.herokuapp.com/api/drone`
    );
    if (!response.ok) {
        return { error: { code: response.status } };
    }
    const json = await response.json();
    return { data: json };
};

export default fetchDroneData;