import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.Cipher;
import java.util.Base64;

public class AESKeyGen {
    public static void main(String[] args) throws Exception {
        // បង្កើតសោរ AES 256-bit
        KeyGenerator keyGen = KeyGenerator.getInstance("AES");
        keyGen.init(256);
        SecretKey secretKey = keyGen.generateKey();

        // បង្ហាញសោរជា Base64
        String encodedKey = Base64.getEncoder().encodeToString(secretKey.getEncoded());
        System.out.println("🔑 AES Secret Key: " + encodedKey);

        // Example: Encrypt / Decrypt
        String text = "My Secret Message";
        Cipher cipher = Cipher.getInstance("AES");
        cipher.init(Cipher.ENCRYPT_MODE, secretKey);
        byte[] encrypted = cipher.doFinal(text.getBytes());
        String encryptedText = Base64.getEncoder().encodeToString(encrypted);
        System.out.println("Encrypted: " + encryptedText);

        cipher.init(Cipher.DECRYPT_MODE, secretKey);
        byte[] decrypted = cipher.doFinal(Base64.getDecoder().decode(encryptedText));
        System.out.println("Decrypted: " + new String(decrypted));
    }
}
                                                          
                                
