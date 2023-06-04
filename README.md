# Velluci
E-commerce shop template, written in Next.js, Firebase and Stripe.

# How to run
1. Clone the repository and install dependencies
```bash
git clone https://github.com/codenerds/velluci.git
cd velluci
yarn i
```
2. Go to [Stripe](https://stripe.com) and create an account (if you don't have one)
3. Add products to Stripe
4. Copy `.env.example` to `.env.local` and fill in the values, do the same with `config.json`
5. Run the development server
```bash
yarn dev
```
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Known issues
- shopping cart isn't fully hidden. Only opacity is set to 0 to simulate hiding it - this is because of animation tha't won't appear if the shopping cart would be set to hidden

# References
- Images by: (Ian Dooley)[https://unsplash.com/@sadswim]