export async function estateLoader() {
    const data1 = await fetch('/property_data.json') .then(res => res.json())
    const data2 =  await fetch('/features.json') .then(res => res.json())
    
    return {estates: data1, features: data2}
}