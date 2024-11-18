const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Dwaipayan%20Datta&g=dwaidatta&x=&l=dwaidatta&i=https%3A%2F%2Fcdn.discordapp.com%2Fattachments%2F1258161390020071515%2F1307881794598604911%2FSPOILER_dpic.png%3Fex%3D673beb57%26is%3D673a99d7%26hm%3Da264ce978ed02860910b67be5bc0d44105841517a75831ac980ea2f460d7a555%26&p=&z=08828";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
