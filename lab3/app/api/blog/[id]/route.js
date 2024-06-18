export function GET(request,{Params}) {
    return Response.json({
        name: "Kanesuan",
        major: "IT",
        IV:"3",
        id: Params.id
    });
}