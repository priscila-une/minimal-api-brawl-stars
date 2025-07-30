import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });
const port= process.env.PORT || "3000";

server.register(cors, {
    origin: "*",
    methods: ["GET"]
});

const brawlers = [
    {id: 1, name: "8-bit", rarity: "Super-raro", image: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC85SFFMYThydzlUOVNyS1hwemhCTi5naWYifQ:supercell:5_DI47b46XNwLVYYukhqo7-oa73Gjar5T5EhgKSTYPY?width=2400"},
    {id: 2, name: "Alli", rarity: "Mítico", image: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9kamJHcFRncmVtWUxpcjNIRlhiby5wbmcifQ:supercell:zDe0rgRa9TZPL9xuUeTYaTOUN37_4WbJzmJYCuO1cB0?width=2400"},
    {id: 3, name: "Bea", rarity: "Épico]", image: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9FODU0WVd2WUZ3U3Q3QXdCR1Y4OS5wbmcifQ:supercell:1n5vE1ZW_A9YyoLvDe3dzTS053-DePBa_l9kqVZJv6E?width=2400"},
    {id: 4, name: "Buzz", rarity: "Épico", image: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9wWlNzUGZ2WFE1eW1WNnQzRDFlUy5wbmcifQ:supercell:DfqBFVsPfEvqKOLnVa6KVtiUWgprjLe56CPuGE4QRjQ?width=2400"},
    {id: 5, name: "Bibi", rarity: "Épico", image: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9DdkZlNTFZQXV4QTJQTkFLVzJOZy5wbmcifQ:supercell:EhY_yyvlLceGaCJp46J1lISpCFI-qeqvFljAQ8CUPFE?width=2400"},
    {id: 6, name: "Griff", rarity: "Raro", image: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9Eb0FDc2VCOFhrZGdMZTNkVXdDci5wbmcifQ:supercell:mg9AeyvJpIFlLrrLgYle--LzgY7v1xRxbIFg79PK-HE?width=2400"},
    {id: 7, name: "Jessie", rarity: "Raro", image: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9SQWNNc2duS3FSVjh4ZlRZRFo1RS5wbmcifQ:supercell:HkMlyxGGPqbWjLMIjmRV2L3rraEt-zQVosDbx7N1dq8?width=2400"},
];

const skins = [
    {   id: 0, 
        brawler: "8-bit",
        skins: [
            { name: "classic", asset:"https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9SR0ZhTFkxd0FmejI3aHJxVmZLdy5wbmcifQ:supercell:jinhNrVtQPj_tnD4cRrRI6h07jK64-VDlbpjzwK-Yqo?width=2400"},
            { name: "anti-virus", asset:"https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC84clp0RTdTUXpwc3FBZDRUV3QxWC5wbmcifQ:supercell:I4bYAswdsuXY0Ad1JwR1NS4wyJW1P269xqKOh7GM1p4?width=2400"},
        ]
    },
    {   id: 1, 
        brawler: "Alli",
        skins: [
            { name: "Hunter Gatherer", asset:"https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC8xSmplNVhIQ2dIcGc0cWR4Yms0Uy5wbmcifQ:supercell:-yCQJQxNIlJOahMuy-Uc0z9zbduSx8XQPQzI2rKim_k?width=2400"},
        ]
    },
    {   id: 2, 
        brawler: "Bea",
        skins: [
            { name: "Gold Neko", asset:"https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9xSERUaFBWSE10S3FVY0NrVVlwaC5wbmcifQ:supercell:AmeSEXon23GYXRQQhvBf4TS15SwYG0ZT1fQeZ5hen_0?width=2400"},
            { name: "Ladybug", asset:"https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9icVFyWkxENWtUaWpLcTd0dFE5Vy5wbmcifQ:supercell:55RvLoW74p6qVQoikrf_OgiNs8nbnQpMd4TUOolfrVY?width=2400"},
        ]
    },
    {
        id: 3,
        brawler: "Buzz",
        skins: [
            { name: "Buzzet", asset:"https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9Ec05GQWhucmJqbmJEOFlBZk43WC5wbmcifQ:supercell:YJHOUQisW-sxEKCmWahHz49pYZ48wluj1LtUL_olDw4?width=2400"},
            { name: "Kaiju", asset:"https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC90R24yNzhBUFljVW1aNHFkYnJIQi5wbmcifQ:supercell:ibNYFB1fQFrjPNUB7JaexjC7Xc4yVUv-QM_H0fAhCTI?width=2400"},
        ]
    },
    {
        id: 4,
        brawler: "Bibi",
        skins: [
            { name: "Gamer", asset:"https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9XbVR6aFlDbjVoWTVBM3NiVG9COS5wbmcifQ:supercell:SLaIdw2CJXIzxuliLyYyQVyvmSlxD7umMqzL0Ebp3c0?width=2400"},
            { name: "Vicious", asset:"https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9Oam1wMjdvRkdqbVRnNERvVXZmWC5wbmcifQ:supercell:o_TTCzS7Co-BHc8VD-2nm1XwpjhKNLgnE5n7zGePMoM?width=2400"},
        ]
    },
    {
        id: 5,
        brawler: "Griff",
        skins: [
            { name: "Gold", asset:"https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9wb05iakdOUnF6c3dwaWNiZ2tMMy5wbmcifQ:supercell:WrkMjMbuvAA3p4GH6-2nCYYZyFVSWQs_YfP9hi7t7Tk?width=2400"},
            { name: "Sleigher", asset:"https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9RNFN3U3hmNlN1UERjTDM0a2hpcy5wbmcifQ:supercell:EjTzEgiQ1NBsJ1yoMne-O62Kt5awf34ESFOpwjyW4go?width=2400"},
        ]
    },
    {
        id: 6,
        brawler: "Jessie",
        skins: [
            { name: "Tanuki", asset:"https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC92RmdIYzFiRzd2VW9SRVpqdWhreC5wbmcifQ:supercell:fcVQCQAm4OD_tVKs0rXIKTAPoUVisVEFZGamwx09V8k?width=2400"},
            { name: "Dragon Knight", asset:"https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC92MVZhclBxczFGaUJmamVLWmVwWC5wbmcifQ:supercell:De7xTtoVR6Wyuc5OfX4BKXLnwHAO-2kaUbYZEZX8o1A?width=2400"},
        ]
    }
]; 

server.get("/brawlers", async (request, response) => {
  response.type("application/json").code(200);
  return {brawlers};
});

interface BrawlerParams {
    id: string;
}

server.get<{Params: BrawlerParams}>("/brawlers/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const brawler = brawlers.find(b => b.id === id);
    
    if(!brawler) {
        response.type("application/json").code(404);
        return { message: "Brawler not found" };
    }else {
        response.type("application/json").code(200);
        return { brawler };
    }
})

server.get("/skins", async(request, response) =>{
    response.type("application/json").code(200);
    return { skins }
});

server.listen({ port: parseInt(port) }, () => {
    console.log("Server initialized ");
})