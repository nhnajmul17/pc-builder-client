import RootLayout from "@/components/Layouts/RootLayouts";
import ProductCard from "@/components/UI/ProductCard";

const Ram = () => {
  const products = [
    {
      _id: "64137cb11f9b7b728a86e374",
      productName: "AMD Ryzen 5 5600X Gaming PC",
      image: "https://live.staticflickr.com/65535/52522584794_4a9898a992_o.jpg",
      status: true,
      category: "ram",
      description: [
        "Gigabyte B550M DS3H AM4 AMD Micro ATX Motherboard",
        "PNY GeForce RTX 3070 8GB UPRISING Dual Fan LHR GDDR6 Graphics Card",
        "AMD RYZEN 5 5600X PROCESSOR",
        "16GB 3200MHz DDR4 RAM+ 128GB M.2 PCIe SSD",
      ],
      price: 128200,
      rating: 3,
      spec: [
        {
          processor: "AMD RYZEN 5 5600X PROCESSOR",
        },
        {
          motherboard: "Gigabyte B550M DS3H AM4 AMD Micro ATX Motherboard",
        },
        {
          ram: "Corsair Vengeance LPX 16GB DDR4 DRAM 3200MHz RAM",
        },
        {
          graphics:
            "PNY GeForce RTX 3070 8GB UPRISING Dual Fan LHR GDDR6 Graphics Card",
        },
        {
          storage:
            "Team MP33 128GB M.2 PCIe SSD Toshiba P300 1TB Desktop PC Internal Hard Drive",
        },
        {
          casing: "Antec NX420 Mid Tower ARGB Gaming Case",
        },
        {
          psu: "Antec CUPRUM STRIKE CSK 650W 80 Plus Bronze Power Supply",
        },
        {
          cooler: "Gamdias Boreas M1-610 ARGB CPU Cooler",
        },
      ],
    },
    {
      _id: "64137cb1ac9e37625af9e1de",
      productName: "Intel 10th Gen Core i3-10100 Gaming PC",
      image: "https://live.staticflickr.com/65535/52521844202_dd853335c9_o.jpg",
      status: true,
      category: "ram",
      description: [
        "MSI H510M-A PRO Intel 10th Gen and 11th Gen Mirco-ATX Motherboard",
        "Intel i3-10100 10th Gen Processor",
        "8GB 2666MHz DDR4 RAM +1TB HDD",
        "GIGABYTE GT 730 2GB DDR3 PCI EXPRESS Graphics Card",
      ],
      price: 41800,
      rating: 4,
      spec: [
        {
          processor: "Intel Core i3-10100 10th Gen Processor",
        },
        {
          motherboard:
            "MSI H510M-A PRO Intel 10th Gen and 11th Gen Mirco-ATX Motherboard",
        },
        {
          ram: "TEAM ELITE PLUS RED 8GB 2666MHz DDR4 RAM",
        },
        {
          graphics:
            "GIGABYTE GeForce GT 730 2GB DDR3 PCI EXPRESS Graphics Card",
        },
        {
          storage: "Toshiba P300 1TB Desktop PC Internal Hard Drive",
        },
        {
          casing: "Revenger A1 Mid Tower RGB ATX Gaming Case",
        },
        {
          psu: "Antec Atom V450 Non-Modular IN SMPS Gaming Power Supply",
        },
      ],
    },
    {
      _id: "64137cb12c3f9fdb722b8362",
      productName: "AMD Ryzen 5 3600 Gaming PC",
      image: "https://live.staticflickr.com/65535/52522855818_98bdd4c07a_o.jpg",
      status: false,
      category: "ram",
      description: [
        "MSI B450 TOMAHAWK MAX AM4 AMD ATX Motherboard (China)",
        "128GB SSD + 16GB 3200MHz RAM + 1TB HDD",
        "AMD Ryzen 5 3600 Processor",
        "ZOTAC GAMING GTX 1660 SUPER 6GB Twin Fan Graphics Card",
      ],
      price: 84400,
      rating: 5,
      spec: [
        {
          processor: "AMD Ryzen 5 3600 Processor",
        },
        {
          motherboard: "MSI B450 TOMAHAWK MAX AM4 AMD ATX Motherboard (China)",
        },
        {
          ram: "Team T-Force VULCAN Z Red 8GB DDR4 3200MHz Desktop Gaming RAM- 2 unit",
        },
        {
          graphics:
            "ZOTAC GAMING GeForce GTX 1660 SUPER 6GB GDDR6 Twin Fan Graphics Card",
        },
        {
          storage:
            "Team MP33 128GB M.2 PCIe SSD Western Digital 1TB Blue Desktop HDD",
        },
        {
          casing: "Xtreme XJOGOS 200-22 RGB Mid Tower Black ATX Gaming Casing",
        },
        {
          psu: "Antec CUPRUM STRIKE CSK 650W 80 Plus Bronze Power Supply",
        },
      ],
    },
    {
      _id: "64137cb12c3f9fdb722b836a",
      productName: "Gaming PC 10th Gen Core i5-10400f",
      image: "https://live.staticflickr.com/65535/52522584684_9fa14a3332_o.jpg",
      status: false,
      category: "ram",
      description: [
        "MSI B560M-A PRO Intel 11th Gen mATX Motherboard",
        "Intel 10th Gen i5-10400F Processor",
        "8GB RAM +1TB HDD + 128GB SSD",
        "ASUS GeForce GT 1030 2GB GDDR5 Low Profile Graphics Card",
      ],
      price: 56700,
      rating: 3,
      spec: [
        {
          processor: "Intel 10th Gen Core i5-10400F Processor",
        },
        {
          motherboard: "MSI B560M-A PRO Intel 11th Gen mATX Motherboard",
        },
        {
          ram: "Team T-Force VULCAN Z Red 8GB DDR4 3200MHz Desktop Gaming RAM",
        },
        {
          graphics: "ASUS GeForce GT 1030 2GB GDDR5 Low Profile Graphics Card",
        },
        {
          storage:
            "Toshiba P300 1TB Desktop PC Internal Hard Drive Team MP33 128GB M.2 PCIe SSD",
        },
        {
          casing: "Antec NX270 RGB TG Mid Tower Gaming Case",
        },
        {
          psu: "Antec VP450P PLUS 450W Continuous Power Supply",
        },
      ],
    },
    {
      _id: "64137cb12c3f9fdb722b836b",
      productName: "Intel 10th Gen Core i7-10700 Gaming PC",
      image: "https://live.staticflickr.com/65535/52522308736_8453894269_o.jpg",
      status: false,
      category: "ram",
      rating: 5,
      description: [
        "ASRock B560M Steel Legend 10th and 11th Gen Micro ATX Motherboard",
        "Intel 10th Gen Core i7-10700 Processor",
        "16GB RAM + 1TB HDD + 256GB SSD",
        "GeForce GTX 1660 Super NB 6GB-V2 Graphics Card",
      ],
      price: 102200,
      spec: [
        {
          processor: "Intel 10th Gen Core i7-10700 Processor",
        },
        {
          motherboard:
            "ASRock B560M Steel Legend 10th and 11th Gen Micro ATX Motherboard",
        },
        {
          ram: "TEAM T-Force DELTA TUF Gaming RGB 16GB 3200MHz DDR4 CL16 RAM",
        },
        {
          graphics: "Colorful GeForce GTX 1660 Super NB 6GB-V2 Graphics Card",
        },
        {
          storage:
            "Seagate Internal 1TB SATA Barracuda HDD Team MP33 256GB M.2 PCIe SSD",
        },
        {
          casing: "Corsair CARBIDE SPEC-DELTA RGB ATX Gaming Case",
        },
        {
          psu: "Antec CUPRUM STRIKE CSK 550W 80 Plus Bronze Power Supply",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products?.map((product) => (
          <ProductCard product={product} key={product._id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Ram;

Ram.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
