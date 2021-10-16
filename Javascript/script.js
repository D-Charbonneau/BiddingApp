let bids = [];

let bid = 0;

window.onload = function ()
{
    let oldData = JSON.parse(window.localStorage.getItem("Bids"));
    for (let i = 0; i < oldData.length; i++)
    {
        bids.push(oldData[i]);
    }
    render();
}

function addBid(bidder)
{
    if (bid < Number.parseInt(document.getElementById(`input${bidder}`).value))
    {
        bids.push(new BidItem(`Bidder${bidder}`, Number.parseInt(document.getElementById(`input${bidder}`).value)));
        bid = Number.parseInt(document.getElementById(`input${bidder}`).value);
        document.getElementById(`input${bidder}`).value = "";
        save();
        render();
    }
    else
    {
        window.alert("Bid must be higher than previous bid");
    }
}

class BidItem
{
    constructor(bidderName, bidAmount)
    {
        this.bidderName = bidderName;
        this.bidAmount = bidAmount;
    }
}

function render()
{
    let display = document.getElementById("bidding");
    display.innerHTML = "";
    for (let i = 0; i < bids.length; i++)
    {
        bidding.innerHTML += `<div class="bid${bids[i].bidderName.slice(-1)}"><p><b>${bids[i].bidderName}:</b></p><p>$${bids[i].bidAmount}</p></div >`;
    }
}

function save()
{
    window.localStorage.setItem("Bids", JSON.stringify(bids));
}