const {MongoClient} = require('mongodb');

async function main(){


    const uri="mongodb+srv://lucianomessineo:fallout@cluster0.bucpzmf.mongodb.net/?retryWrites=true&w=majority"

    const client = new MongoClient(uri);

    try {

        await client.connect();
        //await listOfAllDbs(client);
        
    } catch (error) {

        console.error(error);
        
    }finally{

        await client.close();

    }
}

main();

//recover the list of all db

/*async function listOfAllDbs(client){

    const list = await client.db().admin().listDatabases();

    list.databases.forEach(db=>{

        console.log("\n"+db.name);
    })


}*/