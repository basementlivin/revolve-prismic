/**
 * @typedef {import("@prismicio/client").Content.FeaturedEventSlice} FeaturedEventSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturedEventSlice>} FeaturedEventProps
 * @param {FeaturedEventProps}
 */
const FeaturedEvent = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for featured_event (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FeaturedEvent;
