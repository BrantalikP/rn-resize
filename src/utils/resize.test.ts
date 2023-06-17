import { createStyle } from './createStyle';
import { hs, vs, ms } from './resize';
import { fontsStyles } from '../mocks/mockFonts';
import { CustomStyles } from '../types';

describe('createStyle', () => {
  it('should correctly scale numeric style properties', () => {
    const styles = {
      container: {
        paddingLeft: 10,
        marginTop: 20,
        fontSize: 15,
      },
    };
    const expectedStyles = {
      container: {
        paddingLeft: hs(10),
        marginTop: vs(20),
        fontSize: ms(15),
      },
    };
    const result = createStyle(styles);
    expect(result).toEqual(expectedStyles);
  });

  it('should leave non-numeric style properties unchanged', () => {
    const styles: CustomStyles = {
      container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
    };
    const result = createStyle(styles);
    expect(result).toEqual(styles);
  });

  it('fonts are resized correctly with createStyle util', () => {
    const expectedStyle = {
      fontFamily: 'Poppins-SemiBold',
      fontSize: ms(60),
      letterSpacing: ms(0),
      lineHeight: ms(64),
    };

    expect(expectedStyle).toEqual(fontsStyles.h0);
  });
});
