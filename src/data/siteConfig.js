// Aadivan Honey Site Configuration & Data

// Configurable via VITE_WHATSAPP_NUMBER in .env
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210';

export const createOrderLink = (size, quantity, price) => {
  const cleanNumber = String(WHATSAPP_NUMBER).replace(/[^0-9]/g, '');
  const total = Number(price) * Number(quantity);
  const jarText = quantity === 1 ? '1 jar' : `${quantity} jars`;
  const message = `Hi Aadivan Honey! I would like to order ${jarText} of ${size} Forest Honey for ₹${total.toLocaleString('en-IN')}.\n\nPlease share the payment and delivery details.`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
};

export const createGeneralChatLink = () => {
  const cleanNumber = String(WHATSAPP_NUMBER).replace(/[^0-9]/g, '');
  const message = "Hi Aadivan Honey team! I have a question about your forest honey.";
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
};

export const products = [
  {
    id: 'jar-200',
    size: '200 g',
    unitPrice: 300,
    priceFormatted: '₹300',
    note: 'Ideal taster jar for personal morning rituals and natural immunity.',
    tag: 'TRY US',
    servings: 'Approx. 12-14 servings',
    isPopular: false,
    shippingNote: 'Standard shipping pan-India',
    image: '/aadivan-honey-200g.jpg',
    imageFit: 'cover',
  },
  {
    id: 'jar-500',
    size: '500 ml',
    unitPrice: 600,
    priceFormatted: '₹600',
    note: 'Our signature jar for daily warm teas, wellness tonics and family breakfast.',
    tag: 'FAMILY FAVOURITE',
    servings: 'Approx. 32-35 servings',
    isPopular: true,
    shippingNote: 'Most popular choice',
    image: '/aadivan-honey-grass.jpg',
    imageFit: 'cover',
  },
  {
    id: 'jar-twin-500',
    size: 'Twin Pack (2 x 500 ml)',
    unitPrice: 1100,
    priceFormatted: '₹1,100',
    originalPrice: '₹1,200',
    discount: 'SAVE ₹100',
    note: 'Two full 500 ml jars at a special bundle price. Best value for honey lovers.',
    tag: 'BEST VALUE',
    servings: 'Approx. 70 servings',
    isPopular: false,
    shippingNote: 'Eligible for Priority Dispatch',
    image: '/aadivan-honey-tree.jpg',
    imageFit: 'cover',
  },
];

export const purityPillars = [
  {
    icon: 'TreePine',
    title: 'Deep Forest Harvested',
    desc: 'Sourced from deep wild canopies away from urban pesticides and agricultural pollutants.',
  },
  {
    icon: 'FlameOff',
    title: '100% Raw & Unheated',
    desc: 'Never heated past hive temperatures, protecting natural enzymes, floral pollen, and amino acids.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Zero Sugar / Additives',
    desc: 'Pure honey as bees intended. Zero corn syrup, zero inverted sugar, zero artificial preservatives.',
  },
  {
    icon: 'Package',
    title: 'Airtight Glass Jars',
    desc: 'Packed in food-grade glass jars to preserve the delicate aroma and eliminate microplastic leaching.',
  },
];

export const usageRituals = [
  {
    time: 'Morning',
    title: 'Warm Lemon Tonic',
    desc: 'Stir a spoonful in lukewarm water with fresh lemon to kickstart digestion.',
    tempNote: 'Lukewarm water preserves active enzymes',
  },
  {
    time: 'Afternoon',
    title: 'Artisanal Drizzle',
    desc: 'Drizzled across sourdough, warm oats, yogurt bowls, or seasonal fruits.',
    tempNote: 'Adds rich, natural floral caramel notes',
  },
  {
    time: 'Evening',
    title: 'Tea & Calming Milk',
    desc: 'Pure sweetener for chamomile tea, green tea, or warm spiced turmeric milk.',
    tempNote: 'Soothing natural throat coating',
  },
  {
    time: 'Fitness',
    title: 'Clean Natural Fuel',
    desc: 'Easily digestible natural fructose and glucose for sustained pre/post workout energy.',
    tempNote: '100% natural energy without a crash',
  },
];

export const customerReviews = [
  {
    id: 1,
    name: 'Ananya Deshmukh',
    city: 'Pune',
    rating: 5,
    title: 'Reminds me of my childhood visits to the hills',
    review: 'Commercial honey brands in supermarkets all taste like flavored sugar syrup now. Aadivan is completely different — you can genuinely smell the wild floral aroma the second you open the lid.',
    date: 'Verified Buyer',
  },
  {
    id: 2,
    name: 'Rajesh Kulkarni',
    city: 'Mumbai',
    rating: 5,
    title: 'Natural crystallization was proof of purity',
    review: 'I bought two 500ml jars. In winter it crystallized slightly at the bottom, which is the hallmark of real, unpasteurized honey. Placed the jar in warm water and it became silky smooth again.',
    date: 'Verified Buyer',
  },
  {
    id: 3,
    name: 'Priyanka Sen',
    city: 'Bengaluru',
    rating: 5,
    title: 'Glass jar packaging was completely intact',
    review: 'I was hesitant about ordering glass jars via delivery, but Aadivan’s packaging is rock solid. Thick bubble protection and the honey is dark, rich, and delicious in green tea.',
    date: 'Verified Buyer',
  },
];

export const faqs = [
  {
    question: 'Why does real honey crystallize, and what should I do?',
    answer: 'Crystallization is the natural hallmark of 100% raw honey. If your honey crystallizes in winter, simply place the jar in a bowl of lukewarm water for 10 minutes to restore its liquid texture.',
  },
  {
    question: 'Is Aadivan Honey heated or pasteurized?',
    answer: 'Never. Aadivan is strictly raw and cold-strained. We never heat our honey past hive temperatures, protecting all natural digestive enzymes and floral pollens.',
  },
  {
    question: 'How do I place an order and make payment?',
    answer: 'Click "Order on WhatsApp" on your preferred jar. A pre-filled message opens directly with our team. We confirm your address, share convenient UPI payment details, and dispatch within 24-48 hours.',
  },
  {
    question: 'How is the honey packed to prevent glass breakage during transit?',
    answer: 'Every jar is wrapped in multi-layer shockproof honeycomb cushioning. In the rare event of any transit issue, we provide an immediate free replacement.',
  },
  {
    question: 'What is the shelf life and how should I store it?',
    answer: 'Pure raw honey never spoils! Store your jar at room temperature away from direct sunlight. Always use a clean, dry spoon to prevent introducing moisture.',
  },
];
