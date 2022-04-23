



export default function handler(req, res) 
{
    if (req.method === 'POST')
    {
        console.log(req.body);
        res.json({message: 'RPS'});
    }
    else {
        res.redirect(400, '../contact');
    }
}