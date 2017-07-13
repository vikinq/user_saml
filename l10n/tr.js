OC.L10N.register(
    "user_saml",
    {
    "Saved" : "Kaydedildi",
    "X.509 certificate of the Service Provider" : "Hizmet sağlayıcının X.509 sertifikası",
    "Private key of the Service Provider" : "Hizmet sağlayıcının özel anahtarı",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Bu hizmet sağlayıcı tarafından gönderilen <samlp:logoutRequest> NameID değerinin şifrelenmiş olup olmayacağını gösterir.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Bu hizmet sağlayıcı tarafından gönderilen <samlp:AuthnRequest> iletilerinin imzalanmış olup olmayacağını gösterir [bu bilgi hizmet sağlayıcının üst verilerinde bulunur].",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Bu hizmet sağlayıcı tarafından gönderilen <samlp:logoutRequest> iletilerinin imzalanmış olup olmayacağını gösterir.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Bu hizmet sağlayıcı tarafından gönderilen <samlp:logoutResponse> iletilerinin imzalanmış olup olmayacağını gösterir.",
    "Whether the metadata should be signed." : "Üst verilerin imzalanmasının gerekip gerekmediği.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Bu hizmet sağlayıcı tarafından alınan <samlp:Response>, <samlp:LogoutRequest> ve <samlp:LogoutResponse> bileşenleri için isteğin imzalanmış olup olmayacağını gösterir.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Bu hizmet sağlayıcı tarafından alınan <samlp:Assertion> bileşenleri için isteğin imzalanmış olup olmayacağını gösterir [bu bilgi hizmet sağlayıcının üst verilerinde bulunur]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Bu hizmet sağlayıcı tarafından alınan <samlp:Assertion>bileşenlerinin şifrelenmiş olup olmayacağını gösterir.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Bu hizmet sağlayıcı tarafından alınan SAMLResponse içindeki zorunlu NameID bileşeninin var olup olmayacağını gösterir.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Bu hizmet sağlayıcı tarafından alınan zorunlu NameID şifrelenmiş olup olmayacağını gösterir.",
    "Indicates if the SP will validate all received XMLs." : "Hizmet sağlayıcının tüm alınan XML dosyalarını doğrulayacağını gösterir.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS SAML verilerindeki adres kodlamalarını küçük harfler ile yaparken araç büyük harf kullanır. İmza doğrulaması bölümündeki ADFS uyumluluğunu etkinleştirin.",
    "Attribute to map the UID to." : "UID değerinin eşleştirileceği öznitelik.",
    "Only allow authentication if an account is existent on some other backend. (e.g. LDAP)" : "Bir hesap yalnız başka bir arka sistemde varsa (LDAP gibi) kimliği doğrulansın",
    "Attribute to map the displayname to." : "Görüntülenecek ad değerinin eşleştirileceği öznitelik.",
    "Attribute to map the email address to." : "E-posta adresi değerinin eşleştirileceği özellik.",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "%s masaüstü istemcileri için SAML kimlik doğrulaması kullanılsın (kullanıcının kimliğini yeniden doğrulaması gerekir)",
    "SSO & SAML authentication" : "SSO ve SAML kimlik doğrulaması",
    "Open documentation" : "Belgeleri aç",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Kimlik doğrulamasının Nextcloud içindeki SAML hizmet sağlayıcısı mı ortam değişkeni mi kullanılarak mı yapılacağını.",
    "Use built-in SAML authentication" : "İç SAML kimlik doğrulaması kullanılsın",
    "Use environment variable" : "Ortam değişkeni kullanılsın",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore." : "Bir yönetici kullanıcısı için ayarların kopyaya SSO üzerinden erişebilecek şekilde yapıldığından emin olun. Bundan sonra normal %shesabınızı kullanarak oturum açamayacaksınız.",
    "General" : "Genel",
    "Service Provider Data" : "Hizmet Sağlayıcı Verileri",
    "If your Service Provider should use certificates you can optionally specify them here." : "Hizmet sağlayıcınızın kullandığı sertifikalar varsa buradan isteğinize göre belirtebilirsiniz.",
    "Identity Provider Data" : "Kimlik Sağlayıcı Verileri",
    "Configure your IdP settings here." : "Buradan Kimlik Sağlayıcı ayarlarınızı yapabilirsiniz.",
    "Identifier of the IdP entity (must be a URI)" : "Kimlik Sağlayıcı varlığının belirteci (bir adres olmalı)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "Hizmet sağlayıcının Kimlik Doğrulama İsteği İletisini gödereceği Kimlik Sağlayıcı hedef adresini yazın",
    "URL Location of the IdP where the SP will send the SLO Request" : "Hizmet sağlayıcının SLO İsteğini gödereceği Kimlik Sağlayıcı adresini yazın",
    "Public X.509 certificate of the IdP" : "Kimlik Sağlayıcının herkese açık X.509 sertifikası",
    "Attribute mapping" : "Öznitelik eşleştirme",
    "If you want to optionally map SAML attributes to the user you can configure these here." : "SAML öznitelikleri isteğe bağlı olarak kullanıcı ile buradan eşleştirilebilir.",
    "Security settings" : "Güvenlik ayarları",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Arttırılmış güvenlik için ortamınız tarafından destekleniyorsa şu seçenekleri etkinleştirmeniz önerilir.",
    "Signatures and encryption offered" : "Önerilen imza ve şifreleme",
    "Signatures and encryption required" : "Gereken imza ve şifreleme",
    "Download metadata XML" : "Üst veri XML dosyasını indir",
    "Metadata invalid" : "Üst veri geçersiz",
    "Metadata valid" : "Üst veri geçerli",
    "Account not provisioned." : "Hesabınız hazır değil.",
    "Your account is not provisioned, access to this service is thus not possible." : "Hesabınız hazır olmadığından bu hizmeti kullanamazsınız.",
    "Show Service Provider settings ..." : "Hizmet Sağlayıcı Ayarlarını Görüntüle ...",
    "Show optional Identity Provider settings ..." : "İsteğe bağlı ek Kimlik Sağlayıcı ayarları ...",
    "Show security settings ..." : "Güvenlik ayarlarını görüntüle ...",
    "Show attribute mapping settings ..." : "Öznitelik eşleştirme ayarlarını görüntüle ..."
},
"nplurals=2; plural=(n > 1);");
