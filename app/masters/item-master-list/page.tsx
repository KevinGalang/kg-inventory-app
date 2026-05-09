import PageTitle from "@/components/PageTitle";

const items = [
  {
    sku: "SKU-1",
    itemName: "Description 1",
    vendor: "Vendor 1",
    uom: "PK",
    qty: 10,
    category: "Category 1",
    cost: 12.5,
  },
  {
    sku: "SKU-2",
    itemName: "Description 2",
    vendor: "Vendor 2",
    uom: "EA",
    qty: 20,
    category: "Category 2",
    cost: 18,
  },
  {
    sku: "SKU-3",
    itemName: "Description 3",
    vendor: "Vendor 3",
    uom: "PK",
    qty: 30,
    category: "Category 3",
    cost: 22.75,
  },
  {
    sku: "SKU-4",
    itemName: "Description 4",
    vendor: "Vendor 1",
    uom: "EA",
    qty: 40,
    category: "Category 1",
    cost: 9.5,
  },
  {
    sku: "SKU-5",
    itemName: "Description 5",
    vendor: "Vendor 2",
    uom: "PK",
    qty: 50,
    category: "Category 2",
    cost: 15.25,
  },
  {
    sku: "SKU-6",
    itemName: "Description 6",
    vendor: "Vendor 3",
    uom: "EA",
    qty: 60,
    category: "Category 3",
    cost: 30,
  },
  {
    sku: "SKU-7",
    itemName: "Description 7",
    vendor: "Vendor 1",
    uom: "PK",
    qty: 70,
    category: "Category 1",
    cost: 11.99,
  },
  {
    sku: "SKU-8",
    itemName: "Description 8",
    vendor: "Vendor 2",
    uom: "EA",
    qty: 80,
    category: "Category 2",
    cost: 24.5,
  },
  {
    sku: "SKU-9",
    itemName: "Description 9",
    vendor: "Vendor 3",
    uom: "PK",
    qty: 90,
    category: "Category 3",
    cost: 17.75,
  },
  {
    sku: "SKU-10",
    itemName: "Description 10",
    vendor: "Vendor 1",
    uom: "EA",
    qty: 100,
    category: "Category 1",
    cost: 28,
  },
];

export default function ItemMasterListPage() {
  return (
    <section className="space-y-6">
      <PageTitle
        title="Item Master List"
        description="Define core item data used throughout inventory and purchasing workflows."
      />

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-5 py-4 text-left font-semibold">SKU</th>
                <th className="px-5 py-4 text-left font-semibold">
                  Item Name
                </th>
                <th className="px-5 py-4 text-left font-semibold">Vendor</th>
                <th className="px-5 py-4 text-left font-semibold">UOM</th>
                <th className="px-5 py-4 text-left font-semibold">Qty</th>
                <th className="px-5 py-4 text-left font-semibold">
                  Category
                </th>
                <th className="px-5 py-4 text-left font-semibold">Cost</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item) => (
                <tr
                  key={item.sku}
                  className="border-t border-slate-100 hover:bg-slate-50"
                >
                  <td className="px-5 py-4 font-medium text-slate-700">
                    {item.sku}
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    {item.itemName}
                  </td>
                  <td className="px-5 py-4 text-slate-700">{item.vendor}</td>
                  <td className="px-5 py-4 text-slate-700">{item.uom}</td>
                  <td className="px-5 py-4 text-slate-700">{item.qty}</td>
                  <td className="px-5 py-4 text-slate-700">
                    {item.category}
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    ${item.cost.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}