import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

  const priceOptions =  [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 50.00,
          "features": [
            "Access to gym facilities",
            "Limited group fitness classes",
            "Locker room access",
            "Fitness assessment",
            "Discounts on personal training"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": 40.00,
          "features": [
            "Unlimited gym access",
            "Full access to all group fitness classes",
            "Locker with combination lock",
            "Personal trainer consultation",
            "Nutrition counseling",
            "Access to sauna and steam room"
          ]
        },
        {
          "id": 3,
          "name": "Family Membership",
          "price": 30.00,
          "features": [
            "Access for the entire family",
            "Unlimited gym access",
            "Access to family-friendly group fitness classes",
            "Locker with combination lock for each family member",
            "Childcare services",
            "Family nutrition planning"
          ]
        }
      ]
      

    return (
        <div className="m-10">
            <h1 className="text-5xl mb-5">Best Prices in the town</h1>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{
    priceOptions.map(priceOption => <PriceOption key={priceOption.id} priceOption={priceOption}></PriceOption>)
}
</div>

        </div>
    );
};

export default PriceOptions;